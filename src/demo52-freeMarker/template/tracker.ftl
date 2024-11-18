<#assign data = {
    "customerName": "Mike",
    "installUrl": "https://vr.leadsnavi.com/install-tracker"
}>

<html>
    <body>
        <div style="width: 100%; height: 100%; background: #F6F6F6; overflow: hidden;">
            <div style="width: 700px;max-width: 80%;margin: 40px auto;background: #fff;padding: 32px 24px 24px 24px;font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;font-size: 18px;line-height: 26px;color: #272e47;font-weight: 400;">
                <div style="width: 164px; height:24px; background: url('https://vr.leadsnavi.com/img/mail/logo.png') no-repeat center; background-size: contain; margin: 0 auto 34px;"></div>
                <div style="color:#272E47;font-size: 20px;font-weight: 700; line-height: 30px;">Dear ${data.customerName},</div>
                <div style="height: 2px; background: #ebedf2; margin: 20px 0"></div>
                <div style="margin-bottom: 20px;">We hope this email finds you well.</div>
                <div style="margin-bottom: 20px;">
                    We are reaching out to remind you that by <span style="color: #F7D200; font-weight: 700">Installing Tracker</span> on your website,you can gain access to a wealth of valuable information.
                </div>
                <div style="padding: 16px 24px; background: #F6F6F6; margin-bottom: 20px;">
                    <div style="color: #272E47; font-size: 18px; font-weight: 700; margin-bottom:16px; line-height: 36px;">Once installed you will:</div>
                    <ul style="list-style-position: inside; margin: 0; padding-left: 12px;">
                        <li style="line-height: 36px;">See the companies that are browsing on your website</li>
                        <li style="line-height: 36px;">Identify the key persons related to those potential clues</li>
                        <li style="line-height: 36px;">Obtain the contact information (email) of potential customers</li>
                    </ul>
                </div>
                <div style="margin-bottom: 20px;">Don't miss out on this opportunity to supercharge your website analytics and stay one step ahead of the competition.</div>
                <div style="margin-bottom: 20px;">Best regards.</div>
                <div style="padding: 9px 0;text-align: center;">
                    <a href="${data.installUrl}" style="background: #1D201F; color: #FFEB5C; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 0 auto; text-align: center;font-size: 18px; font-weight: 700; line-height: 26px;">
                        Install Tracker
                    </a>
                </div>
                <div style="height: 2px; background: #ebedf2; margin: 20px 0"></div>
                <div style="text-align: center;font-size: 16px; color: #545A6E; font-weight: 400;">
                    In case you need any help, just reply to this message or email us at
                    <br />
                    <a href="mailto:support@leadsnavi.com" style="color: #8a33ad; display: inline-block; word-break: break-word">
                        support@leadsnavi.com
                    </a>
                </div>
            </div>
        </div>
    </body>
</html>
