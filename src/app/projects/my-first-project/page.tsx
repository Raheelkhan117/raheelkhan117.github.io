import NavBar from "../../../components/NavBar";

export default function PostPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-mono mb-4">Automating Daily Email Reminders with PowerShell</h1>
        <img src="\images\cover.png" alt="Cover" className="mb-6 w-3/4 h-auto rounded-lg" />
        <p className="text-lg text-[var(--foreground)] mb-6">
          I automated daily email reminders using PowerShell to stay on track with tasks. Here’s a quick guide to set up your own email reminder system.
        </p>

        <h2 className="text-2xl font-bold font-mono mb-4">Why Automate?</h2>
        <p className="text-lg text-[var(--foreground)] mb-6">
          Automating reminders helps with consistency, simplicity (no extra apps), and customizability for personal needs.
        </p>

        <h2 className="text-2xl font-bold font-mono mb-4">Steps to Automate</h2>

        <h3 className="text-xl font-bold font-mono mb-4">1. Create PowerShell Script</h3>
        <p className="text-lg text-[var(--foreground)] mb-6">
          Use a PowerShell script with Gmail’s SMTP server to send daily email reminders. Here’s the basic script for it:
        </p>
        <pre className="bg-neutral-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm font-mono">
          <code>
{`$EmailFrom = "your@gmail.com"
$EmailTo = "your@gmail.com"
$Subject = "Daily Reminder"
$Body = "Reminder tasks here"
$SMTPServer = "smtp.gmail.com"
$SMTPPort = 587
$Username = "your@gmail.com"
$Password = "your_app_password"
Send-MailMessage -From $EmailFrom -To $EmailTo -Subject $Subject -Body $Body -SmtpServer $SMTPServer -Port $SMTPPort -UseSsl -Credential (New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Username, (ConvertTo-SecureString $Password -AsPlainText -Force))`}
          </code>
        </pre>

        <h3 className="text-xl font-bold font-mono mb-4">2. Create Gmail App Password</h3>
        <p className="text-lg text-[var(--foreground)] mb-6">
          Use Gmail’s App Password for secure access. Generate one from your Google Account’s security settings and update the script.
        </p>

        <h3 className="text-xl font-bold font-mono mb-4">3. Schedule with Task Scheduler</h3>
        <p className="text-lg text-[var(--foreground)] mb-6">
          Use Windows Task Scheduler to automate running the script daily. Set up a task to run the script at your preferred time.
        </p>

        <h3 className="text-xl font-bold font-mono mb-4">4. Test the Automation</h3>
        <p className="text-lg text-[var(--foreground)] mb-6">
          Run the task manually in Task Scheduler to ensure it works before relying on it.
        </p>

        <h2 className="text-2xl font-bold font-mono mb-4">Why It’s Great for Beginners</h2>
        <p className="text-lg text-[var(--foreground)] mb-6">
          This project is a simple intro to PowerShell automation, with no need for third-party apps. Can be customised to add attachments or send system reports.
        </p>

        

        <p className="text-sm text-[var(--foreground)] mb-6 max-w-xl">Posted on April 20, 2024</p>
      </main>
    </>
  );
}
