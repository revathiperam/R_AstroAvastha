package com.myproject

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen
import android.view.WindowManager

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        // Show the splash screen
        SplashScreen.show(this)
        super.onCreate(savedInstanceState)

        // Optionally, add code to keep the screen on during splash
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
    }

    // Override the onResume to hide the splash screen when the app is fully loaded
    override fun onResume() {
        super.onResume()
        SplashScreen.hide(this)  // Hide the splash screen when the app is ready
    }

    // Only one definition of getMainComponentName() is needed
    override fun getMainComponentName(): String {
        return "MyProject"  // Replace with your app name
    }

    /**
     * Returns the instance of the [ReactActivityDelegate].
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName)
}
