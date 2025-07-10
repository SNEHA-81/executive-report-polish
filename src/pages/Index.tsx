
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TeamPerformanceChart from "@/components/TeamPerformanceChart";
import CompletionProgress from "@/components/CompletionProgress";
import TimelineChart from "@/components/TimelineChart";
import CapacityMetrics from "@/components/CapacityMetrics";
import StrategicRecommendations from "@/components/StrategicRecommendations";
import ExecutiveInsights from "@/components/ExecutiveInsights";
import PerformanceMatrix from "@/components/PerformanceMatrix";
import RiskAssessment from "@/components/RiskAssessment";
import { TrendingUp, Users, Target, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const Index = () => {
  const keyMetrics = [
    {
      title: "Project Completion",
      value: "91.8%",
      subtitle: "13,775 / 15,000 parts",
      icon: Target,
      trend: "+2.3% this week",
      status: "on-track"
    },
    {
      title: "Team Velocity",
      value: "137 parts/day",
      subtitle: "67% above target",
      icon: TrendingUp,
      trend: "Accelerating",
      status: "excellent"
    },
    {
      title: "Resource Efficiency",
      value: "7.5 FTE",
      subtitle: "Optimal utilization",
      icon: Users,
      trend: "Stable capacity",
      status: "optimal"
    },
    {
      title: "Risk Level",
      value: "Low",
      subtitle: "2 weeks buffer",
      icon: CheckCircle,
      trend: "Decreasing",
      status: "low-risk"
    },
    {
      title: "Quality Score",
      value: "98.2%",
      subtitle: "First-pass success",
      icon: CheckCircle,
      trend: "+1.4% improvement",
      status: "excellent"
    },
    {
      title: "Timeline Confidence",
      value: "94%",
      subtitle: "Early completion likely",
      icon: Clock,
      trend: "High confidence",
      status: "confident"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'border-l-green-500 bg-green-50';
      case 'optimal': return 'border-l-blue-500 bg-blue-50';
      case 'on-track': return 'border-l-blue-500 bg-blue-50';
      case 'low-risk': return 'border-l-green-500 bg-green-50';
      case 'confident': return 'border-l-purple-500 bg-purple-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'optimal': return 'bg-blue-100 text-blue-800';
      case 'on-track': return 'bg-blue-100 text-blue-800';
      case 'low-risk': return 'bg-green-100 text-green-800';
      case 'confident': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Executive Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Badge variant="secondary" className="bg-slate-900 text-white px-4 py-2 text-sm font-semibold">
              EXECUTIVE DASHBOARD
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
              ON TRACK FOR EARLY COMPLETION
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            SAP Master Data Simplification
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-slate-600">
            <span><strong>Client:</strong> Maruti Suzuki India Ltd</span>
            <span><strong>Partner:</strong> Protiviti</span>
            <span><strong>Phase:</strong> Execution & Delivery</span>
            <span><strong>Timeline:</strong> Q4 2024</span>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className={`border-l-4 ${getStatusColor(metric.status)} shadow-sm hover:shadow-md transition-shadow`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold text-slate-700 leading-tight">
                    {metric.title}
                  </CardTitle>
                  <metric.icon className="h-5 w-5 text-slate-600 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {metric.value}
                </div>
                <p className="text-xs text-slate-600 font-medium">{metric.subtitle}</p>
                <Badge className={`text-xs font-medium ${getStatusBadgeColor(metric.status)}`}>
                  {metric.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Executive Insights Section */}
        <ExecutiveInsights />

        {/* Performance Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardHeader className="border-b bg-slate-50">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Team Performance Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <TeamPerformanceChart />
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="border-b bg-slate-50">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                Completion Status
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CompletionProgress />
            </CardContent>
          </Card>
        </div>

        {/* Performance Matrix */}
        <PerformanceMatrix />

        {/* Strategic Timeline & Capacity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader className="border-b bg-slate-50">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-purple-600" />
                Strategic Timeline & Projections
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <TimelineChart />
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="border-b bg-slate-50">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Capacity Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CapacityMetrics />
            </CardContent>
          </Card>
        </div>

        {/* Risk Assessment */}
        <RiskAssessment />

        {/* Strategic Recommendations */}
        <Card className="shadow-sm">
          <CardHeader className="border-b bg-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Strategic Recommendations & Action Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <StrategicRecommendations />
          </CardContent>
        </Card>

        {/* Executive Footer */}
        <div className="text-center text-sm text-slate-500 pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <span>McKinsey-Style Executive Analytics</span>
            <span className="hidden sm:block">•</span>
            <span>Generated for Strategic Decision Making</span>
            <span className="hidden sm:block">•</span>
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
