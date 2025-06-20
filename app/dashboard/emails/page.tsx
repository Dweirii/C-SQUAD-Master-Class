"use client"

import { useState, useEffect } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  Mail,
  Send,
  Users,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Eye,
  Calendar,
  Target,
  Zap,
  Settings,
  Clock,
  Globe,
  Sparkles,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function BulkEmailPage() {
  const [type, setType] = useState("free")
  const [subject, setSubject] = useState("")
  const [html, setHtml] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ subject?: string; html?: string }>({})
  const [scheduleEmail, setScheduleEmail] = useState(false)
  const [scheduledDate, setScheduledDate] = useState("")
  const [progress, setProgress] = useState(0)

  // Simulate progress during sending
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev
          return prev + Math.random() * 15
        })
      }, 200)
      return () => clearInterval(interval)
    } else {
      setProgress(0)
    }
  }, [isLoading])

  const validateForm = () => {
    const newErrors: { subject?: string; html?: string } = {}

    if (!subject.trim()) {
      newErrors.subject = "Email subject is required"
    } else if (subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters long"
    }

    if (!html.trim()) {
      newErrors.html = "Email content is required"
    } else if (html.length < 20) {
      newErrors.html = "Email content must be at least 20 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSend = async () => {
    if (!validateForm()) {
      toast.error("Please fix the form errors before sending")
      return
    }

    setIsLoading(true)
    setProgress(10)

    try {
      // Simulate API call with progress
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setProgress(50)

      const res = await fetch("/api/bulk-send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          subject,
          html,
          scheduled: scheduleEmail ? scheduledDate : null,
        }),
      })

      setProgress(80)
      await new Promise((resolve) => setTimeout(resolve, 500))

      if (res.ok) {
        setProgress(100)
        toast.success("Emails sent successfully! 🎉")
        // Reset form after successful send
        setSubject("")
        setHtml("")
        setScheduleEmail(false)
        setScheduledDate("")
      } else {
        const errorData = await res.json()
        toast.error(errorData.message || "Failed to send emails")
      }
    } catch (error) {
      toast.error("Network error occurred")
    } finally {
      setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 500)
    }
  }

  const getTypeInfo = (selectedType: string) => {
    switch (selectedType) {
      case "free":
        return {
          label: "Free Subscribers",
          color: "bg-purple-50 text-purple-700 border-purple-200",
          icon: Users,
          description: "Users on the free plan",
        }
      case "paid":
        return {
          label: "Paid Subscribers",
          color: "bg-emerald-50 text-emerald-700 border-emerald-200",
          icon: CheckCircle2,
          description: "Active paying customers",
        }
      case "unpaid":
        return {
          label: "Unpaid Subscribers",
          color: "bg-rose-50 text-rose-700 border-rose-200",
          icon: AlertCircle,
          description: "Users with overdue payments",
        }
      default:
        return {
          label: "All Subscribers",
          color: "bg-slate-50 text-slate-700 border-slate-200",
          icon: Users,
          description: "All registered users",
        }
    }
  }

  const typeInfo = getTypeInfo(type)
  const TypeIcon = typeInfo.icon

  const previewContent = html.replace(/{{name}}/g, "John Doe")

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Enhanced Header */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="relative">
              <div className="p-4 bg-gradient-to-br from-[#14697A] to-teal-600 rounded-none">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 p-1 bg-[#FC8A0A] rounded-full">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#14697A] to-teal-600 bg-clip-text text-transparent">
                Bulk Email Campaign
              </h1>
              <p className="text-slate-600 text-lg">Send targeted emails to your subscribers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className=" border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-6 bg-[#14697A]">
                <CardTitle className="flex items-center text-white gap-1 text-xl">
                  <div className="p-2 bg-[#14697A]/10 rounded-lg">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  Campaign Configuration
                </CardTitle>
                <CardDescription className="text-base text-white">
                  Configure your email campaign settings and content
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 p-8">
                {/* Audience Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#14697A]" />
                    <Label htmlFor="type" className="text-base font-semibold">
                      Target Audience
                    </Label>
                  </div>

                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger className="h-14 text-left border-2 hover:border-[#14697A]/30 transition-colors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">
                        <div className="flex items-center gap-3">
                          <Users className="h-4 w-4 text-purple-600" />
                          <div>
                            <div className="font-medium">Free Subscribers</div>
                            <div className="text-sm text-slate-500">Users on the free plan</div>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="paid">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <div>
                            <div className="font-medium">Paid Subscribers</div>
                            <div className="text-sm text-slate-500">Active paying customers</div>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="unpaid">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-4 w-4 text-rose-600" />
                          <div>
                            <div className="font-medium">Unpaid Subscribers</div>
                            <div className="text-sm text-slate-500">Users with overdue payments</div>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Selected Audience Info */}
                  <div className={`p-4 rounded-lg border-2 ${typeInfo.color}`}>
                    <div className="flex items-center gap-3">
                      <TypeIcon className="h-5 w-5" />
                      <div className="flex-1">
                        <div className="font-semibold">{typeInfo.label}</div>
                        <div className="text-sm opacity-80">{typeInfo.description}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                {/* Email Content */}
                <Tabs defaultValue="compose" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="compose" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Compose
                    </TabsTrigger>
                    <TabsTrigger value="preview" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Preview
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="compose" className="space-y-6">
                    {/* Subject Field */}
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-base font-semibold flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Subject *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Enter your email subject line..."
                        className={`h-14 text-base ${errors.subject ? "border-red-500 focus-visible:ring-red-500" : "border-2 hover:border-[#14697A]/30"}`}
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value)
                          if (errors.subject) {
                            setErrors((prev) => ({ ...prev, subject: undefined }))
                          }
                        }}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-600 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Email Content */}
                    <div className="space-y-3">
                      <Label htmlFor="html" className="text-base font-semibold flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Email Content *
                      </Label>
                      <Textarea
                        id="html"
                        rows={16}
                        placeholder="Write your email content here... Use {{name}} to personalize with subscriber names."
                        className={`text-base resize-none ${errors.html ? "border-red-500 focus-visible:ring-red-500" : "border-2 hover:border-[#14697A]/30"}`}
                        value={html}
                        onChange={(e) => {
                          setHtml(e.target.value)
                          if (errors.html) {
                            setErrors((prev) => ({ ...prev, html: undefined }))
                          }
                        }}
                      />
                      {errors.html && (
                        <p className="text-sm text-red-600 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          {errors.html}
                        </p>
                      )}

                      {/* Helper Alert */}
                      <Alert className="border-[#14697A]/20 bg-teal-50">
                        <Sparkles className="h-4 w-4 text-[#14697A]" />
                        <AlertDescription className="text-[#14697A]">
                          <strong>Pro Tip:</strong> Use{" "}
                          <code className="bg-[#14697A]/10 px-2 py-1 rounded text-sm">{"{{name}}"}</code> in your
                          content to automatically personalize each email with the subscriber's name.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </TabsContent>

                  <TabsContent value="preview" className="space-y-4">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 bg-slate-50">
                      <div className="bg-white rounded-none border p-6 max-w-2xl mx-auto">
                        <div className="border-b pb-4 mb-4">
                          <div className="text-sm text-slate-500 mb-2">Subject:</div>
                          <div className="font-semibold text-lg">
                            {subject || "Your email subject will appear here"}
                          </div>
                        </div>
                        <div className="prose prose-sm max-w-none">
                          {previewContent ? (
                            <div className="whitespace-pre-wrap">{previewContent}</div>
                          ) : (
                            <div className="text-slate-400 italic">Your email content will appear here...</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Scheduling Options */}
                <div className="space-y-4 p-6 bg-gray-50 border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-[#FC8A0A]" />
                      <div>
                        <Label className="text-base font-semibold">Schedule Email</Label>
                        <p className="text-sm text-slate-600">Send this email at a specific time</p>
                      </div>
                    </div>
                    <Switch checked={scheduleEmail} onCheckedChange={setScheduleEmail} />
                  </div>

                  {scheduleEmail && (
                    <div className="space-y-3">
                      <Label htmlFor="schedule-date">Schedule Date & Time</Label>
                      <Input
                        id="schedule-date"
                        type="datetime-local"
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        className="h-12"
                        min={new Date().toISOString().slice(0, 16)}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Send Button Card */}
            <Card className=" border-0 bg-[#14697A] rounded-none">
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-lg font-semibold text-white">Ready to Send?</div>
                  <div className="text-sm text-white">
                    {scheduleEmail ? "Email will be scheduled" : "Email will be sent immediately"}
                  </div>
                </div>

                {isLoading && (
                  <div className="space-y-3">
                    <Progress value={progress} className="h-2" />
                    <div className="text-center text-sm text-slate-600">Sending emails... {Math.round(progress)}%</div>
                  </div>
                )}

                <Button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="w-full bg-[#FC8A0A]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : scheduleEmail ? (
                    <>
                      <Calendar className="h-5 w-5 mr-2" />
                      Schedule Email
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Now
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="rounded-none border-0 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="h-5 w-5 text-[#14697A]" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Keep subject lines under 50 characters for better open rates</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Personalize with {"{{name}}"} to increase engagement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Test your emails before sending to large audiences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Schedule emails for optimal delivery times</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
