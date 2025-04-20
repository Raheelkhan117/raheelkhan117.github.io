import NavBar from "../../../components/NavBar"

export default function PostPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-mono mb-4">Automating Daily Email Reminders with PowerShell: A Beginner’s Guide</h1>
        <img src="\images\cover.png" alt="Cover"  className="mb-6 w-3/4 h-auto rounded-lg" /><p className="text-lg text-[var(--foreground)] mb-6 ">
        
        Hello!
In this post, I’m excited to share how I automated daily email reminders using PowerShell, and it was my first automation project! 🎉

As someone who’s just starting to explore PowerShell and automation, I wanted to build a project that would help me stay on track every day with my tasks. I didn’t want to rely on any external tools or apps — so I thought, “Why not automate it with a script?”

Here’s the step-by-step process for creating your very own email reminder system using PowerShell, even if you’re a complete beginner!
        </p>
        <h2 className="text-2xl font-bold font-mono mb-4">Why Automate Email Reminders?</h2>
        <p className="text-lg text-[var(--foreground)] mb-6 ">
        Before we dive into the technical details, let me explain why I chose to automate email reminders:

<br></br>Consistency: It’s easy to forget important tasks or personal goals. An email reminder helps keep me on track every day!

<br></br>Simplicity: There are plenty of apps out there, but this automation is done entirely in PowerShell with no extra tools.

<br></br>Customizability: You can easily tweak the reminder message, the time of day it’s sent, and other settings to suit your needs.

Now, let’s look at how I set it all up!
        </p>
        <h2 className="text-2xl font-bold font-mono mb-4">Step 1: Create the PowerShell Script</h2>
        <p className="text-lg text-[var(--foreground)] mb-6 ">
        The first thing we need is a PowerShell script that sends the email. In this case, we’ll be using Gmail’s SMTP server to send an email every day.

Here’s the basic script I used:
        </p>
        <pre className="bg-neutral-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm font-mono">
  <code>
{`$EmailFrom = "your@gmail.com"
$EmailTo = "your@gmail.com"
$Subject = "Daily Reminder"
$Body = @"
Hey there! 👋

Here’s your daily check-in:
- ✅ Drink water
- ✅ Move around
- ✅ Focus on top 3 tasks
- ✅ Take small breaks

You got this!
"@

# SMTP settings for Gmail
$SMTPServer = "smtp.gmail.com"
$SMTPPort = 587
$Username = "your@gmail.com"
$Password = "your_app_password"  # Replace with your Gmail App Password

# Send the email
Send-MailMessage -From $EmailFrom -To $EmailTo -Subject $Subject -Body $Body -SmtpServer $SMTPServer -Port $SMTPPort -UseSsl \`
-Credential (New-Object -TypeName System.Management.Automation.PSCredential \`
-ArgumentList $Username, (ConvertTo-SecureString $Password -AsPlainText -Force))`}
  </code>
</pre>

<h2 className="text-2xl font-bold font-mono mb-4">What This Script Does:</h2>
<p className="text-lg text-[var(--foreground)] mb-6 ">
Let me break down what each part of the script does:<br></br>

<strong>Email Details:</strong> You set your <strong>From</strong> and <strong>To</strong> email addresses, the <strong>Subject</strong>, and the <strong>Body</strong> of the email (this is where you define the tasks or reminders you want to receive).
<br></br>
<strong>SMTP Server:</strong> We’re using <strong>Gmail’s SMTP server</strong> (<code>smtp.gmail.com</code>) to send the email. However, you can easily modify this if you’re using a different email provider — just change the server address to your provider’s SMTP server.
<br></br>
<strong>App Password:</strong> Instead of your regular Gmail password, this script uses an <strong>App Password</strong>, which is a more secure option provided by Google for third-party apps like PowerShell. This helps ensure your account stays safe while automating the process. You can create this password from your Google account settings (more on that in the next step!).
</p>

        <h2 className="text-2xl font-bold font-mono mb-4">Step 2: Create Your Gmail App Password</h2>
<p className="text-lg text-[var(--foreground)] mb-6 ">
To make the script work, you can’t use your regular Gmail password. Gmail requires an <strong>App Password</strong> to send emails through a third-party app (like PowerShell).

Here’s how to get your Gmail App Password:
<ol className="list-decimal list-inside text-lg text-[var(--foreground)] mb-6">
  <li>Go to <a href="https://myaccount.google.com/security" target="_blank" className="text-blue-500 underline">Google Account Security Settings</a>.</li>
  <li>Under <strong>“Signing in to Google”</strong>, ensure that <strong>2-Step Verification</strong> is turned on.</li>
  <li>In the <strong>App Passwords</strong> section, generate a password for <strong>Mail</strong> (or whatever you like).</li>
  <li>Replace the <code>your_app_password</code> placeholder in the script with the <strong>App Password</strong>.</li>
</ol>
</p>

<h2 className="text-2xl font-bold font-mono mb-4">Step 3: Schedule the Script with Task Scheduler</h2>
<p className="text-lg text-[var(--foreground)] mb-6 ">
Once the script is ready, the next step is to <strong>automate</strong> it so that it runs at a specific time every day. I use <strong>Task Scheduler</strong> to do this.

<img src="\images\taskscheduler.png" alt="Task Scheduler"  className="mb-6 w-1/2 h-auto rounded-lg" />

Here’s how you can schedule your email reminder:

<ol className="list-decimal list-inside text-lg text-[var(--foreground)] mb-6">
  <li><strong>Open Task Scheduler</strong>: Press <code>Win + S</code> and search for <strong>Task Scheduler</strong>, then open it.</li>
  <li><strong>Create a New Task</strong>: Click on <strong>Create Basic Task</strong> in the right panel.</li>
  <li><strong>Name Your Task</strong>: Give it a name like <strong>Daily Email Reminder</strong> and click <strong>Next</strong>.</li>
  <li><strong>Set the Trigger</strong>: Choose <strong>Daily</strong> and set the time you want to receive your email (e.g., 9:00 AM).</li>
  <li><strong>Set the Action</strong>: Choose <strong>Start a Program</strong>. In the <strong>Program/script</strong> box, type:
    <pre className="bg-neutral-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm font-mono">powershell.exe</pre>
  </li>
  <li><strong>Set the Script Path</strong>: In the <strong>Add Arguments</strong> box, type the full path to your <strong>.ps1</strong> file. For example:
    <pre className="bg-neutral-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm font-mono">-ExecutionPolicy Bypass -File "C:\Users\YourUsername\Documents\Scripts\DailyReminder.ps1"</pre>
  </li>
  <li><strong>Finish</strong>: Review the settings and click <strong>Finish</strong>.</li>
</ol>
</p>

<h2 className="text-2xl font-bold font-mono mb-4">Step 4: Test Your Script</h2>
<p className="text-lg text-[var(--foreground)] mb-6 ">
Before you fully rely on your automated reminder, you should test it manually:

<ol className="list-decimal list-inside text-lg text-[var(--foreground)] mb-6">
  <li>Go back to <strong>Task Scheduler</strong>.</li>
  <li>Right-click on your task and select <strong>Run</strong>.</li>
  <li>Check your email inbox to ensure the reminder is sent successfully!</li>
</ol>
<img src="\images\email.png" alt="Email Received"  className="mb-6 w-1/2 h-auto rounded-lg" />
</p>



<h2 className="text-2xl font-bold font-mono mb-4">Why This Automation Is Awesome for Beginners</h2>
<p className="text-lg text-[var(--foreground)] mb-6 ">
This project was my first dive into <strong>PowerShell automation</strong>, and it was both fun and useful. It’s a simple way to stay on top of your daily tasks, and it’s a fantastic beginner project for anyone learning PowerShell.

<br></br><strong>Learn PowerShell</strong>: This simple automation is a great way to get started with scripting and automation.
<br></br><strong>No Extra Apps Needed</strong>: You can use <strong>just PowerShell</strong> and <strong>Task Scheduler</strong>, so you don’t need to sign up for third-party services.
<br></br><strong>Customizable</strong>: Modify the script to include your own personal reminders or even get a daily motivational quote!
</p>

<h2 className="text-2xl font-bold font-mono mb-4">Next Steps: Take Your Automation Further!</h2>
<p className="text-lg text-[var(--foreground)] mb-6 ">
Once you get comfortable with the basics, here are a few ways to level up your automation:<br></br>

<strong>Add Attachments</strong>: You can attach files (like daily reports) to the email.
<br></br><strong>Send System Reports</strong>: Include system health stats like disk space, CPU usage, or memory usage in your reminder.
<br></br><strong>Send Multiple Reminders</strong>: Customize the script to send more than one email per day.
</p>

<h2 className="text-2xl font-bold font-mono mb-4">Final Thoughts</h2>
<p className="text-lg text-[var(--foreground)] mb-6 ">
This project was my first dive into <strong>PowerShell automation</strong>, and I’m excited to share it with you. It’s an easy and practical way to automate a simple task that we all need in our daily lives: reminders!

<br></br>If you’re just starting out with automation, I highly recommend giving it a try. Don’t worry if you’re new to scripting — this project is easy to follow and doesn’t require any advanced programming knowledge.

Happy automating! 🎉
</p>

<h2 className="text-2xl font-bold font-mono mb-4">Have You Tried Automating Anything with PowerShell?</h2>
<p className="text-lg text-[var(--foreground)] mb-6 ">
Let me know your thoughts or if you need help getting started!
</p>








        <p className="text-sm text-[var(--foreground)] mb-6 max-w-xl">Posted on April 20, 2024</p>
      </main>
    </>
  )
}
