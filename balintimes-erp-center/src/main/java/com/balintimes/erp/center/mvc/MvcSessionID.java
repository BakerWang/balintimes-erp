package com.balintimes.erp.center.mvc;

import java.io.Serializable;

/**
 * Created by AlexXie on 2015/8/24.
 */
public class MvcSessionID implements Serializable {

    private String SessionID = "";

    public String getSessionID() {
        return SessionID;
    }

    public void setSessionID(String sessionID) {
        SessionID = sessionID;
    }
}
