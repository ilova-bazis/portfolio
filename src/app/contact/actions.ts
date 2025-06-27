"use server";
import { sendTelegramMessage } from '@/lib/teelgram';
import { promises as fs } from 'fs';
import path from 'path';


export async function sendEmail(formData: FormData): Promise<{ success: boolean; message: string }> {
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
    const website = formData.get('website')?.toString().trim() || '';

    if (website) {
        console.log('Bot detected');
        return { success: true, message: 'Message sent successfully!' };
    }

    if (!name || !email || !message) {
        return { success: false, message: 'All fields are required' };
    }

    if (name.length < 2 || name.length > 100) {
        return { success: false, message: 'Name must be between 2 and 100 characters' };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: 'Please enter a valid email address' };
    }

    if (message.length < 10 || message.length > 2000) {
        return { success: false, message: 'Message must be between 10 and 2000 characters' };
    }

    try {
        const submission = {
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
            ip: ''
        };

        const dataDir = path.join(process.cwd(), 'data');
        await fs.mkdir(dataDir, { recursive: true });

        const filePath = path.join(dataDir, 'submissions.json');
        let submissions = [];

        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            submissions = JSON.parse(fileContent);
        } catch (error) {
            if (error instanceof Error && 'code' in error && error.code !== 'ENOENT') {
                console.error('Error reading submissions file:', error);
            } else if (error instanceof Error) {
                console.error('Error reading submissions file:', error);
            } else {
                console.error('Unknown error occurred:', error);
            }
        }

        submissions.push(submission);

        await fs.writeFile(
            filePath,
            JSON.stringify(submissions, null, 2),
            'utf-8'
        );

        console.log('Form submission saved:', submission);
        
        await sendTelegramNotification(submission);

        return {
            success: true,
            message: 'Your message has been received! I\'ll get back to you soon.'
        };
    } catch (error) {
        console.error('Error saving form submission:', error);
        return {
            success: false,
            message: 'Failed to save your message. Please try again later.'
        };
    }
}

export async function sendTelegramNotification(submission: { name: string; email: string; message: string; timestamp: string; ip: string }): Promise<boolean> {
    const tgMessage = `
📬 <b>New Contact Form Submission</b>
━━━━━━━━━━━━━━
👤 <b>Name:</b> ${submission.name}
📧 <b>Email:</b> <code>${submission.email}</code>
📝 <b>Message:</b>
${submission.message}
━━━━━━━━━━━━━━
⏰ ${new Date().toLocaleString()}
        `.trim();
    console.log('Telegram message:', tgMessage);
    return await sendTelegramMessage(tgMessage);
}
