import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def mail(content):
    send_email = ""
    send_pw = ""
    results = []

    s = smtplib.SMTP_SSL('smtp.gmail.com')
    s.login(send_email, send_pw)
    receive_emails = ['']
    for receive in receive_emails:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = "TEST"
        msg['From'] = send_email
        msg['To'] = receive
        part1 = MIMEText(content, 'plain')
        msg.attach(part1)
        s.sendmail(send_email, receive, msg.as_string())
        s.quit()


if __name__ == '__main__':
    content = input()
    mail(content)
