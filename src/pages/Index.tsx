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
import { TrendingUp, Shield, Target, CheckCircle, Zap, Trophy, Users, Clock } from "lucide-react";

const Index = () => {
  const keyMetrics = [
    {
      title: "COMPLETION STATUS",
      value: "55.1%",
      subtitle: "13,775 of 25,000 parts",
      icon: CheckCircle,
      trend: "11,225 parts remaining",
      status: "completion",
      indicator: "ACCELERATING"
    },
    {
      title: "CURRENT PACE", 
      value: "137/day",
      subtitle: "vs 182 required",
      icon: TrendingUp,
      trend: "45 parts/day gap",
      status: "pace",
      indicator: "SCALING UP"
    },
    {
      title: "TIME REMAINING",
      value: "7-8 Weeks",
      subtitle: "With enhanced strategy",
      icon: Clock,
      trend: "Protected timeline",
      status: "time",
      indicator: "MANAGEABLE"
    },
    {
      title: "ENHANCED STRATEGY",
      value: "225+ Parts/Day",
      subtitle: "With 2 new members",
      icon: Target,
      trend: "24% surplus capacity",
      status: "strategy",
      indicator: "DEPLOYED"
    },
    {
      title: "TEAM CAPACITY",
      value: "10 FTE",
      subtitle: "Optimized workforce",
      icon: Users,
      trend: "Enhanced from 7.5 FTE",
      status: "team",
      indicator: "REINFORCED"
    },
    {
      title: "DELIVERY ASSURANCE",
      value: "43+ Parts/Day",
      subtitle: "Buffer above requirement",
      icon: Shield,
      trend: "Risk mitigation active",
      status: "buffer",
      indicator: "PROTECTED"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completion': return 'border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50';
      case 'pace': return 'border-l-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50';
      case 'time': return 'border-l-orange-500 bg-gradient-to-r from-orange-50 to-amber-50';
      case 'strategy': return 'border-l-purple-500 bg-gradient-to-r from-purple-50 to-violet-50';
      case 'team': return 'border-l-teal-500 bg-gradient-to-r from-teal-50 to-cyan-50';
      case 'buffer': return 'border-l-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'completion': return 'bg-green-100 text-green-800 font-bold';
      case 'pace': return 'bg-blue-100 text-blue-800 font-bold';
      case 'time': return 'bg-orange-100 text-orange-800 font-bold';
      case 'strategy': return 'bg-purple-100 text-purple-800 font-bold';
      case 'team': return 'bg-teal-100 text-teal-800 font-bold';
      case 'buffer': return 'bg-emerald-100 text-emerald-800 font-bold';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Project Status Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex flex-col items-center space-y-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-base font-bold shadow-lg">
              ENHANCED CAPACITY STRATEGY - 25,000 PART DELIVERY PLAN
            </Badge>
            <Badge variant="outline" className="border-2 border-blue-500 text-blue-700 bg-blue-50 px-4 py-2 font-semibold">
              11,225 PARTS REMAINING • 7-8 WEEKS TARGET • 225+ PARTS/DAY CAPACITY
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            SAP Master Data Simplification
          </h1>
          <div className="text-lg font-semibold text-slate-700">
            <span className="text-blue-600">STRATEGY ENHANCED</span> • 
            <span className="text-indigo-600 ml-2">CAPACITY SCALED</span> • 
            <span className="text-purple-600 ml-2">DELIVERY SECURED</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-slate-600">
            <span><strong>Client:</strong> Maruti Suzuki India Ltd</span>
            <span><strong>Partner:</strong> Protiviti</span>
            <span><strong>Progress:</strong> <span className="text-blue-600 font-bold">55.1% COMPLETE</span></span>
            <span><strong>Target:</strong> <span className="text-purple-600 font-bold">25,000 PARTS</span></span>
          </div>
        </div>

        {/* Critical Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className={`border-l-4 ${getStatusColor(metric.status)} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-bold text-slate-800 leading-tight">
                    {metric.title}
                  </CardTitle>
                  <metric.icon className="h-6 w-6 text-slate-700 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl sm:text-4xl font-black text-slate-900">
                  {metric.value}
                </div>
                <p className="text-xs text-slate-600 font-semibold">{metric.subtitle}</p>
                <div className="flex items-center justify-between">
                  <Badge className={`text-xs font-bold ${getStatusBadgeColor(metric.status)}`}>
                    {metric.trend}
                  </Badge>
                  <span className="text-xs font-bold text-slate-600">
                    {metric.indicator}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Executive Insights Section */}
        <ExecutiveInsights />

        {/* Performance Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg border-2 border-blue-200">
            <CardHeader className="border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="text-lg font-bold flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Current Team Performance Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <TeamPerformanceChart />
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 border-green-200">
            <CardHeader className="border-b bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardTitle className="text-lg font-bold flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Completion Progress Tracking
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-lg border-2 border-purple-200">
            <CardHeader className="border-b bg-gradient-to-r from-purple-600 to-violet-600 text-white">
              <CardTitle className="text-lg font-bold flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Enhanced Delivery Timeline - Strategy Deployed
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <TimelineChart />
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 border-orange-200">
            <CardHeader className="border-b bg-gradient-to-r from-orange-600 to-amber-600 text-white">
              <CardTitle className="text-lg font-bold flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Enhanced Team Capacity
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
        <Card className="shadow-lg border-2 border-emerald-200">
          <CardHeader className="border-b bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <CardTitle className="text-lg font-bold flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Enhanced Strategy Implementation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <StrategicRecommendations />
          </CardContent>
        </Card>

        {/* Client Confidence Statement */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-xl shadow-xl">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">SCALED DELIVERY ASSURANCE</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-blue-400" /> Current Progress: 55.1% COMPLETE</span>
              <span className="flex items-center"><Shield className="h-4 w-4 mr-1 text-indigo-400" /> Enhanced Strategy: 225+ PARTS/DAY</span>
              <span className="flex items-center"><Trophy className="h-4 w-4 mr-1 text-purple-400" /> Buffer Protection: 24% SURPLUS</span>
            </div>
            <p className="text-slate-300 text-sm max-w-4xl mx-auto">
              Executive Dashboard • Enhanced Team Strategy • 25,000 Part Delivery Plan • 
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
