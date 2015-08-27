package com.balintimes.erp.util.json;

/**
 * Created by AlexXie on 2015/8/25.
 */
public class ResponseMessage {

    public static AjaxResponse successful(Object data) {
        AjaxResponse ajaxResponse = new AjaxResponse();
        ajaxResponse.setData(data);

        return ajaxResponse;
    }

    public static String successfulJson(Object data) {
        return JsonUtil.ToJson(successful(data));
    }

    public static AjaxResponse successful(Object data, int total) {
        AjaxResponse ajaxResponse = new AjaxResponse();
        ajaxResponse.setData(data);
        ajaxResponse.setTotal(total);
        return ajaxResponse;
    }

    public static String successfulJson(Object data, int total) {
        return JsonUtil.ToJson(successful(data, total));
    }

    public static String successful() {
        AjaxResponse ajaxResponse = new AjaxResponse();
        return JsonUtil.ToJson(ajaxResponse);
    }

    public static AjaxResponse successful(String message) {
        AjaxResponse ajaxResponse = new AjaxResponse();
        ajaxResponse.setResponseMsg(message);
        return ajaxResponse;
    }

    public static String successfulJson(String message) {
        return JsonUtil.ToJson(successful(message));
    }

    public static String failure() {
        AjaxResponse ajaxResponse = new AjaxResponse();
        ajaxResponse.setSuccess("false");
        return JsonUtil.ToJson(ajaxResponse);
    }


    /*返回一个失败的信息*/
    public static String failure(String message) {
        AjaxResponse ajaxResponse = new AjaxResponse();
        ajaxResponse.setSuccess("false");
        ajaxResponse.setResponseMsg(message);
        return JsonUtil.ToJson(ajaxResponse);
    }


    public static String permission(boolean ispermission, String message) {

        AjaxResponse ajaxResponse = new AjaxResponse();
        ajaxResponse.setPermission(ispermission);
        ajaxResponse.setResponseMsg(message);

        return JsonUtil.ToJson(ajaxResponse);

    }
}
