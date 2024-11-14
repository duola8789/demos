<#assign text = "Hello World">
<#assign xNum = 100>
<#assign myList = [
    { "name": "Item 111111", "show": true },
    { "name": "Item 2", "show": false },
    { "name": "Item 3", "show": true }
]>

<html>
    <body>
        ${text}
        <div>
            <#switch xNum>
                <#case 10>
                xNum等于10
                <#break>
                <#case 20>
                xNum等于20
                <#break>
                <#default>
                xNum不等于10也不等于20
            </#switch>
        </div>
        <#list myList as item>
            <#if item.show>
                <div style="display: block;">${item.name}</div>
            <#else>
                <div style="display: none;">${item.name}</div>
            </#if>
        </#list>
        <div>
            现在时间是：${.now?string('yyyy-MM-dd HH:mm:ss')}
        </div>
    </body>
</html>
