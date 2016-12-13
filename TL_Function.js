/**
 * ajax 同步 如果想用异步 只能直接写
 * @param type
 * @param url
 * @param data
 * @param dataType
 * @constructor
 */
function TL_Query_Ajax(url,data,type,dataType,timeout){
    if(!arguments[1]) data = "";
    if(!arguments[2]) type = "post";
    if(!arguments[3]) dataType = "json";
    if(!arguments[4]) timeout = "3000";
    var datas = '1';
    $.ajax({
        type:type,
        url:window.location.protocol+"//"+window.location.host+"/"+url,
        data:data,
        dataType:dataType,
        timeout:timeout,
        async:false,
        success:function(data){var datas = data;},
        error:function(xhr, type){var datas = "xhr=" + xhr + "type=" + type},
    });
    return datas;
}

/**
 * Laravel 框架使用 ajax 同步  如果想用异步 只能直接写
 * @param type
 * @param url
 * @param data
 * @param dataType
 * @constructor
 */
function TL_Query_Ajax_Laravel(url,data,type,dataType,timeout){
    if(!arguments[1]) data = "";
    if(!arguments[2]) type = "post";
    if(!arguments[3]) dataType = "json";
    if(!arguments[4]) timeout = "3000";
    $.ajax({
        type:type,
        url:window.location.protocol+"//"+window.location.host+"/"+url,
        data:data,
        dataType:dataType,
        timeout:timeout,
        async:false,
        headers: {'X-CSRF-TOKEN': $('meta[name="ajax"]').attr('content')},
        success:function(data){return data;},
        error:function(xhr, type){return "xhr=" + xhr + "type=" + type},
    });
}

/**
 * 默认选中复选框
 * @param name Checkbox name  字符串
 * @param values 需要被选中的默认值  数组形式
 * @constructor
 */
function TL_Default_Selected_Checkbox(name,values){
    var obj = document.getElementsByName(name);
    for (var i=0;i<obj.length;i++){
        for (var s=0;s<values.length;s++){
            if(obj[i].value==values[s]){
                obj[i].checked = true;
            }
        }
    }
}

/**
 * 默认选中单选按钮
 * @param name Radi name  字符串
 * @param values 需要被选中的默认值  字符串
 * @constructor
 */
function TL_Default_Selected_Radio(name,values){
    var obj = document.getElementsByName(name);
    for (var i=0;i<obj.length;i++){
        if(obj[i].value==values){
            obj[i].checked = true;
        }
    }
}

/**
 * 获取复选框默认值
 * @param name
 * @constructor
 */
function TL_obtain_Checkbox_Value(name){
    var obj = document.getElementsByName(name);
    var value = '';
    for (var i=0;i<obj.length;i++){
        if(obj[i].checked == true){
            value += obj[i].value+",";
        }
    }
    value = value.substr(0,value.length-1);
    return value;
}