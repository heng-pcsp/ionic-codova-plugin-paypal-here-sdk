package cordova-plugin-paypalheresdk;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class paypalheresdk extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException 
    {
        if (action.equals("coolMethod")) 
        {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            
            return true;
        }
        else if (action.equals("getMessage")) 
        {
            String message = args.getString(0); 
            this.echo(message, callbackContext);

            return true;
        }
        else if (action.equals("greet")) {

            String name = data.getString(0);
            String message = "Hello, " + name;
            callbackContext.success(message);

            return true;

        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

    private void getMessage(String message, CallbackContext callbackContext) 
    {
        if (message != null && message.length() > 0) 
        { 
            callbackContext.success(message);
        } 
        else 
        {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
