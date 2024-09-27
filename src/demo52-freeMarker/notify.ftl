<#assign notificationName = "System notification">
<#assign notificationDate = "9 Sep.2024 -- 15 Sep.2024">
<#assign totalCompanies = 6>
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
    }
]>

<html>
    <body>
        <div style="width: 100%; height: 100%; background: #f6f6f6; overflow: hidden">
            <div style="width: 700px;max-width: 80%;margin: 40px auto;background: #fff;padding: 24px;font-family: Poppins, Helvetica, Helvetica, 微软雅黑, 宋体, sans-serif;font-size: 14px;line-height: 22px;color: #272e47;font-weight: 400;">
                <div style="text-align: center; padding: 10px; margin-bottom: 24px">
                    <img alt="logo" src="https://vr.leadsnavi.com/img/mail/logo.png" style="max-width: unset; width: 164px" />
                </div>
                <div>
                    <div style="font-weight: 500; font-size: 16px">${notificationName}:</div>
                    <div style="height: 1px; background: #ebedf2; margin: 16px 0"></div>
                    <div style="overflow: hidden">
                        <div style="float: left">
                            <div>${notificationDate}</div>
                            <#if (totalCompanies > 1)>
                                <div>We identified <span style="color: #8a33ad; font-weight: 700;margin: 0 2px">${totalCompanies}</span> companies on your website</div>
                            <#else>
                                <div>We identified <span style="color: #8a33ad; font-weight: 700;margin: 0 2px">${totalCompanies}</span> company on your website</div>
                            </#if>
                        </div>
                        <a href="${viewAllUrl}" style="float: right;background: #1d201f;border-radius: 4px;padding: 5px 16px;color: #fff;font-weight: 500;margin-top: 6px;text-decoration: none;">
                            View All
                        </a>
                    </div>
                    <div style="height: 1px; background: #ebedf2; margin: 16px 0"></div>
                    <div>
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
                            <div style="color: #272e47; font-weight: 500; font-size: 16px; margin-bottom: 12px">${item.companyName}</div>
                            <div style="margin-bottom: 12px">
                                <div style="display: inline-block; color: #9fa2ad; margin-right: 24px">Country</div>
                                <div style="display: inline-block; color: #272e47">${item.country}</div>
                            </div>
                            <div style="margin-bottom: 12px">
                                <div style="display: inline-block; color: #9fa2ad; margin-right: 24px">Location</div>
                                <div style="display: inline-block; color: #272e47">${item.location}</div>
                            </div>
                            <div style="margin-bottom: 12px">
                                <div style="display: inline-block; color: #9fa2ad; margin-right: 24px">Start at</div>
                                <div style="display: inline-block; color: #272e47">
                                    <div style="display: inline-block; margin-right: 16px">${item.startVisitTime}</div>
                                    <div style="display: inline-block; margin-right: 8px; background: #fff3a1; padding: 1px 8px; border-radius: 2px">
                                        ${item.visitors}
                                        <#if (item.visitors == 1)>
                                            Visitors
                                        <#else>
                                            Visitor
                                        </#if>
                                    </div>
                                    <div style="display: inline-block; margin-right: 8px; background: #e7dcfe; padding: 1px 8px; border-radius: 2px">
                                        ${item.pageViews}
                                        <#if (item.pageViews == 1)>
                                            Page
                                        <#else>
                                            Pages
                                        </#if>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style="display: inline-block; color: #9fa2ad; margin-right: 24px; vertical-align: middle">The most viewed page</div>
                                <a href="${item.mostVisitedPageView}" style="color: #8a33ad;margin-right: 16px;max-width: 378px;display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;vertical-align: middle;">
                                    leads-navi.cowork.netease.com
                                </a>
                                <div style="display: inline-block; background: #fff; padding: 1px 8px; border-radius: 2px; vertical-align: middle">${item.mostVisitedPageViewCount}x</div>
                            </div>
                        </div>
                    </#list>
                    <div style="margin-top: 24px; text-align: center; font-size: 12px; color: #545a6e">
                        If you don't want to receive such emails, you can define it yourself
                        <a href="${feedUrl}" style="color: #8a33ad">here</a>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
