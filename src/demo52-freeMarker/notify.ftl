<#assign notificationName = "System notification">
<#assign notificationDate = "9 Sep.2024 -- 15 Sep.2024">
<#assign totalCompanies = 5>
<#assign viewAllUrl = "https://www.baidu.com">
<#assign feedUrl = "https://www.163.com">
<#assign notificationCompanies = [
    {
        "companyName": "BlueOcean Tech Group",
        "country": "China",
        "location": "Hong Kong",
        "startVisitTime": "14:15",
        "visitors": 2,
        "pageViews": 7,
        "mostVisitedPageView": "https://leads-navi.cowork.netease.com",
        "mostVisitedPageViewCount": 5
    },
    {
        "companyName": "BlueOcean Tech Group",
        "country": "China",
        "location": "Hong Kong",
        "startVisitTime": "14:15",
        "visitors": 2,
        "pageViews": 7,
        "mostVisitedPageView": "docs.popo.netease.com/lingxi/58f76532641f4d7eae16e1efd349b6?appVersion=4.12.0&deviceType=4&popo_hidenativebar=1&popo_noindicator=1&disposable_login_token=1",
        "mostVisitedPageViewCount": 5
    }
]>

<html>
    <body>
        <div style="width: 100%; height: 100%; background: #f6f6f6; overflow: hidden">
            <div style="width: 700px;max-width: 80%;margin: 40px auto;background: #fff;padding: 32px 24px 24px 24px;font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;font-size: 18px;line-height: 26px;color: #272e47;font-weight: 400;">
                <div style="text-align: center; padding: 10px; margin-bottom: 24px">
                    <img alt="logo" src="https://vr.leadsnavi.com/img/mail/logo.png" style="max-width: unset; width: 164px" />
                </div>
                <div>
                    <div style="font-weight: 600; font-size: 20px; padding-left: 8px">${notificationName}:</div>
                    <div style="height: 2px; background: #ebedf2; margin: 20px 0"></div>
                    <div style="overflow: hidden">
                        <div style="float: left; padding-left: 8px; line-height: 26px">
                            <div>${notificationDate}</div>
                            <#if (totalCompanies > 1)>
                                <div>We identified <span style="color: #8a33ad; font-weight: 700;margin: 0 2px">${totalCompanies}</span> companies on your website</div>
                            <#else>
                                <div>We identified <span style="color: #8a33ad; font-weight: 700;margin: 0 2px">${totalCompanies}</span> company on your website</div>
                            </#if>
                        </div>
                        <a href="${viewAllUrl}"  style="float: right;background: #1d201f;border-radius: 4px;width: 110px;height: 40px;line-height: 40px;text-align: center;color: #fff;font-weight: 500;margin-top: 6px;text-decoration: none;">
                            View All
                        </a>
                    </div>
                    <div style="height: 2px; background: #ebedf2; margin: 20px 0"></div>
                    <div style="padding-left: 8px">
                        Here are the first ${notificationCompanies?size}
                        <#if (notificationCompanies?size == 1)>
                            company
                        <#else>
                            companies
                        </#if>
                        we identified:
                    </div>
                    <#list notificationCompanies as item>
                        <div style="border-radius: 4px; background: #f6f6f6; padding: 24px; margin-top: 16px">
                            <div style="color: #272e47; font-weight: 500; font-size: 20px; margin-bottom: 16px">${item.companyName}</div>
                            <div style="margin-bottom: 16px">
                                <div style="display: inline-block; color: #9fa2ad; margin-right: 24px; width: 80px">Country</div>
                                <div style="display: inline-block; color: #272e47">${item.country}</div>
                            </div>
                            <div style="margin-bottom: 16px">
                                <div style="display: inline-block; color: #9fa2ad; margin-right: 24px; width: 80px">Location</div>
                                <div style="display: inline-block; color: #272e47">${item.location}</div>
                            </div>
                            <div style="margin-bottom: 16px">
                                <div style="display: inline-block; color: #9fa2ad; margin-right: 24px; width: 80px">Start at</div>
                                <div style="display: inline-block; color: #272e47">
                                    <div style="display: inline-block; margin-right: 16px">${item.startVisitTime}</div>
                                    <div style="display: inline-block; margin-right: 8px; background: #fff3a1; padding: 1px 8px; border-radius: 2px; font-size: 14px;">
                                        ${item.visitors}
                                        <#if (item.visitors == 1)>
                                            Visitor
                                        <#else>
                                            Visitors
                                        </#if>
                                    </div>
                                    <div style="display: inline-block; margin-right: 8px; background: #e7dcfe; padding: 1px 8px; border-radius: 2px; font-size: 14px;">
                                        ${item.pageViews}
                                        <#if (item.pageViews == 1)>
                                            Page
                                        <#else>
                                            Pages
                                        </#if>
                                    </div>
                                </div>
                            </div>
                            <div style="height: 2px; background: #e1e3e8; margin: 16px 0"></div>
                            <div>
                                <div style="display: inline-block; color: #9fa2ad; margin-right: 8px">The most viewed page</div>
                                <div style="display: inline-block; background: #fff; padding: 1px 8px; border-radius: 2px; font-size: 14px">${item.mostVisitedPageViewCount}x</div>
                            </div>
                            <div style="margin-top: 12px">
                                <a href="${item.mostVisitedPageView}" style="color: #8a33ad; display: inline-block; word-break: break-word">
                                    ${item.mostVisitedPageView}
                                </a>
                            </div>
                        </div>
                    </#list>
                    <div style="margin-top: 24px; text-align: center; font-size: 16px; color: #545a6e">
                        If you don't want to receive such emails, you can define it yourself
                        <a href="${feedUrl}" style="color: #8a33ad">here</a>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
