"use client"

import { useState } from "react"
import { Settings, User, Bell, Shield, Moon, Sun, Globe, CreditCard, Key, Save } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    browser: true,
  })
  const [language, setLanguage] = useState("english")
  const [currency, setCurrency] = useState("usd")
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  // Add state for account activity and trading activity
  const [accountActivity, setAccountActivity] = useState(true)
  const [tradingActivity, setTradingActivity] = useState(true)

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-emerald-100 rounded-full p-2 mr-3">
            <Settings className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-gray-500 text-sm">Manage your account preferences</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="font-medium">Settings</h2>
            </div>
            <nav className="p-2">
              <button
                onClick={() => setActiveTab("account")}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === "account" ? "bg-emerald-50 text-emerald-700" : "hover:bg-gray-50"
                }`}
              >
                <User className="h-4 w-4 mr-3" />
                <span>Account</span>
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === "notifications" ? "bg-emerald-50 text-emerald-700" : "hover:bg-gray-50"
                }`}
              >
                <Bell className="h-4 w-4 mr-3" />
                <span>Notifications</span>
              </button>
              <button
                onClick={() => setActiveTab("appearance")}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === "appearance" ? "bg-emerald-50 text-emerald-700" : "hover:bg-gray-50"
                }`}
              >
                <Moon className="h-4 w-4 mr-3" />
                <span>Appearance</span>
              </button>
              <button
                onClick={() => setActiveTab("language")}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === "language" ? "bg-emerald-50 text-emerald-700" : "hover:bg-gray-50"
                }`}
              >
                <Globe className="h-4 w-4 mr-3" />
                <span>Language & Region</span>
              </button>
              <button
                onClick={() => setActiveTab("payment")}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === "payment" ? "bg-emerald-50 text-emerald-700" : "hover:bg-gray-50"
                }`}
              >
                <CreditCard className="h-4 w-4 mr-3" />
                <span>Payment Methods</span>
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  activeTab === "security" ? "bg-emerald-50 text-emerald-700" : "hover:bg-gray-50"
                }`}
              >
                <Shield className="h-4 w-4 mr-3" />
                <span>Security</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border p-6">
            {/* Account Settings */}
            {activeTab === "account" && (
              <div>
                <h2 className="text-lg font-bold mb-6">Account Settings</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                    <div className="flex items-center">
                      <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                        <User className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div className="ml-5">
                        <button className="bg-white border border-gray-300 rounded px-3 py-1 text-sm font-medium hover:bg-gray-50">
                          Change
                        </button>
                        <button className="ml-2 text-sm text-gray-500 hover:text-gray-700">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        defaultValue="John Doe"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        defaultValue="john.doe@example.com"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        defaultValue="us"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={3}
                      defaultValue="Crypto enthusiast and investor since 2017."
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div className="pt-4 border-t flex justify-end">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700 flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === "notifications" && (
              <div>
                <h2 className="text-lg font-bold mb-6">Notification Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Price Alerts</div>
                          <div className="text-sm text-gray-500">Get notified when prices change significantly</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.email}
                            onChange={() => setNotifications({ ...notifications, email: !notifications.email })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Account Activity</div>
                          <div className="text-sm text-gray-500">Get notified about sign-ins and security alerts</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={accountActivity}
                            onChange={() => setAccountActivity(!accountActivity)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Price Alerts</div>
                          <div className="text-sm text-gray-500">Get notified when prices change significantly</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.push}
                            onChange={() => setNotifications({ ...notifications, push: !notifications.push })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Trading Activity</div>
                          <div className="text-sm text-gray-500">Get notified about your trades and orders</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={tradingActivity}
                            onChange={() => setTradingActivity(!tradingActivity)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">SMS Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Security Alerts</div>
                          <div className="text-sm text-gray-500">Get notified about important security events</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.sms}
                            onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t flex justify-end">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700 flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === "appearance" && (
              <div>
                <h2 className="text-lg font-bold mb-6">Appearance Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Theme</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        className={`border rounded-lg p-4 cursor-pointer ${!darkMode ? "ring-2 ring-emerald-500" : ""}`}
                        onClick={() => setDarkMode(false)}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="font-medium">Light</div>
                          <Sun className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div className="h-20 bg-white border rounded-md"></div>
                      </div>
                      <div
                        className={`border rounded-lg p-4 cursor-pointer ${darkMode ? "ring-2 ring-emerald-500" : ""}`}
                        onClick={() => setDarkMode(true)}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="font-medium">Dark</div>
                          <Moon className="h-5 w-5 text-gray-700" />
                        </div>
                        <div className="h-20 bg-gray-900 rounded-md"></div>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer">
                        <div className="flex justify-between items-center mb-3">
                          <div className="font-medium">System</div>
                          <div className="flex">
                            <Sun className="h-5 w-5 text-yellow-500" />
                            <span className="mx-1">/</span>
                            <Moon className="h-5 w-5 text-gray-700" />
                          </div>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-white to-gray-900 rounded-md"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Color Scheme</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border rounded-lg p-2 cursor-pointer ring-2 ring-emerald-500">
                        <div className="h-10 bg-emerald-500 rounded-md"></div>
                        <div className="text-center mt-2 text-sm font-medium">Emerald</div>
                      </div>
                      <div className="border rounded-lg p-2 cursor-pointer">
                        <div className="h-10 bg-blue-500 rounded-md"></div>
                        <div className="text-center mt-2 text-sm font-medium">Blue</div>
                      </div>
                      <div className="border rounded-lg p-2 cursor-pointer">
                        <div className="h-10 bg-purple-500 rounded-md"></div>
                        <div className="text-center mt-2 text-sm font-medium">Purple</div>
                      </div>
                      <div className="border rounded-lg p-2 cursor-pointer">
                        <div className="h-10 bg-orange-500 rounded-md"></div>
                        <div className="text-center mt-2 text-sm font-medium">Orange</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t flex justify-end">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700 flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Language & Region Settings */}
            {activeTab === "language" && (
              <div>
                <h2 className="text-lg font-bold mb-6">Language & Region Settings</h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                      Language
                    </label>
                    <select
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="chinese">Chinese</option>
                      <option value="japanese">Japanese</option>
                      <option value="korean">Korean</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                      Currency
                    </label>
                    <select
                      id="currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="usd">USD - US Dollar</option>
                      <option value="eur">EUR - Euro</option>
                      <option value="gbp">GBP - British Pound</option>
                      <option value="jpy">JPY - Japanese Yen</option>
                      <option value="cad">CAD - Canadian Dollar</option>
                      <option value="aud">AUD - Australian Dollar</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                      Time Zone
                    </label>
                    <select
                      id="timezone"
                      defaultValue="utc-8"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="utc-12">UTC-12:00</option>
                      <option value="utc-11">UTC-11:00</option>
                      <option value="utc-10">UTC-10:00</option>
                      <option value="utc-9">UTC-09:00</option>
                      <option value="utc-8">UTC-08:00 (Pacific Time)</option>
                      <option value="utc-7">UTC-07:00 (Mountain Time)</option>
                      <option value="utc-6">UTC-06:00 (Central Time)</option>
                      <option value="utc-5">UTC-05:00 (Eastern Time)</option>
                      <option value="utc-4">UTC-04:00</option>
                      <option value="utc-3">UTC-03:00</option>
                      <option value="utc-2">UTC-02:00</option>
                      <option value="utc-1">UTC-01:00</option>
                      <option value="utc">UTC±00:00</option>
                      <option value="utc+1">UTC+01:00</option>
                      <option value="utc+2">UTC+02:00</option>
                      <option value="utc+3">UTC+03:00</option>
                      <option value="utc+4">UTC+04:00</option>
                      <option value="utc+5">UTC+05:00</option>
                      <option value="utc+5.5">UTC+05:30 (India)</option>
                      <option value="utc+6">UTC+06:00</option>
                      <option value="utc+7">UTC+07:00</option>
                      <option value="utc+8">UTC+08:00 (China)</option>
                      <option value="utc+9">UTC+09:00 (Japan)</option>
                      <option value="utc+10">UTC+10:00</option>
                      <option value="utc+11">UTC+11:00</option>
                      <option value="utc+12">UTC+12:00</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 mb-1">
                      Date Format
                    </label>
                    <select
                      id="dateFormat"
                      defaultValue="mdy"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="mdy">MM/DD/YYYY</option>
                      <option value="dmy">DD/MM/YYYY</option>
                      <option value="ymd">YYYY/MM/DD</option>
                    </select>
                  </div>

                  <div className="pt-4 border-t flex justify-end">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700 flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Methods Settings */}
            {activeTab === "payment" && (
              <div>
                <h2 className="text-lg font-bold mb-6">Payment Methods</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Credit & Debit Cards</h3>
                    <div className="border rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-16 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                            VISA
                          </div>
                          <div className="ml-4">
                            <div className="font-medium">•••• •••• •••• 4242</div>
                            <div className="text-sm text-gray-500">Expires 12/2025</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mr-3">
                            Default
                          </span>
                          <button className="text-sm text-gray-500 hover:text-gray-700">Edit</button>
                          <button className="ml-3 text-sm text-red-500 hover:text-red-700">Remove</button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-16 bg-red-600 rounded-md flex items-center justify-center text-white font-bold">
                            MC
                          </div>
                          <div className="ml-4">
                            <div className="font-medium">•••• •••• •••• 5555</div>
                            <div className="text-sm text-gray-500">Expires 08/2024</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button className="text-sm text-gray-500 hover:text-gray-700">Set Default</button>
                          <button className="ml-3 text-sm text-gray-500 hover:text-gray-700">Edit</button>
                          <button className="ml-3 text-sm text-red-500 hover:text-red-700">Remove</button>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                      + Add New Card
                    </button>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Bank Accounts</h3>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium">Chase Bank</div>
                            <div className="text-sm text-gray-500">Checking •••• 9876</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mr-3">
                            Default
                          </span>
                          <button className="text-sm text-gray-500 hover:text-gray-700">Edit</button>
                          <button className="ml-3 text-sm text-red-500 hover:text-red-700">Remove</button>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                      + Add New Bank Account
                    </button>
                  </div>

                  <div className="pt-4 border-t flex justify-end">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700 flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div>
                <h2 className="text-lg font-bold mb-6">Security Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-medium">Two-Factor Authentication (2FA)</div>
                        <div className="text-sm text-gray-500">Add an extra layer of security to your account</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={twoFactorEnabled}
                          onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    {twoFactorEnabled && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm mb-3">
                          Two-factor authentication is enabled. You will need to enter a verification code when signing
                          in.
                        </div>
                        <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                          Disable Two-Factor Authentication
                        </button>
                      </div>
                    )}
                    {!twoFactorEnabled && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm mb-3">
                          Protect your account with two-factor authentication. You'll be asked for a verification code
                          when signing in.
                        </div>
                        <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                          Enable Two-Factor Authentication
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">Session Management</h3>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Current Session</div>
                            <div className="text-xs text-gray-500">
                              Chrome on Windows • New York, USA • IP: 192.168.1.1
                            </div>
                          </div>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Active</span>
                        </div>
                      </div>
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Safari on iPhone</div>
                            <div className="text-xs text-gray-500">Los Angeles, USA • Last active: 2 days ago</div>
                          </div>
                          <button className="text-xs text-red-600 hover:text-red-700">Revoke</button>
                        </div>
                      </div>
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Firefox on MacBook</div>
                            <div className="text-xs text-gray-500">Chicago, USA • Last active: 5 days ago</div>
                          </div>
                          <button className="text-xs text-red-600 hover:text-red-700">Revoke</button>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 text-sm text-red-600 hover:text-red-700 font-medium">
                      Sign Out All Other Sessions
                    </button>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">API Keys</h3>
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Trading Bot</div>
                          <div className="text-xs text-gray-500">Created: Jan 15, 2023 • Last used: 2 hours ago</div>
                        </div>
                        <div className="flex items-center">
                          <button className="text-xs text-gray-600 hover:text-gray-700 mr-3">View</button>
                          <button className="text-xs text-red-600 hover:text-red-700">Revoke</button>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                      <Key className="h-4 w-4 mr-1" />
                      Generate New API Key
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
