
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TeamPerformanceChart from "@/components/TeamPerformanceChart";
import CompletionProgress from "@/components/CompletionProgress";
import TimelineChart from "@/components/TimelineChart";
import CapacityMetrics from "@/components/CapacityMetrics";
import StrategicRecommendations from "@/components/StrategicRecommendations";
import { TrendingUp, Users, Target } from "lucide-react";

const Index = () => {
  const keyMetrics = [
    {
      title: "Total Completion",
      value: "91.8%",
      subtitle: "13,775 / 15,000 parts",
      icon: Target,
      trend: "+2.3% this week"
    },
    {
      title: "Team Capacity",
      value: "7.5 FTE",
      subtitle: "Active specialists",
      icon: Users,
      trend: "Stable"
    },
    {
      title: "Daily Output",
      value: "137 parts",
      subtitle: "Current average",
      icon: TrendingUp,
      trend: "Above required pace"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
            <Badge variant="secondary" className="bg-white text-blue-600">
              EXECUTIVE INSIGHT
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            SAP Master Data Simplification
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <span><strong>Client:</strong> Maruti Suzuki India Ltd (MSIL)</span>
            <span><strong>Consultant:</strong> Protiviti</span>
            <span><strong>Status:</strong> Final Phase</span>
          </div>
        </div>

        {/* Key Metrics Row - Now 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-l-4 border-l-blue-600">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600 leading-tight">
                    {metric.title}
                  </CardTitle>
                  <metric.icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {metric.value}
                </div>
                <p className="text-xs text-gray-500">{metric.subtitle}</p>
                <Badge variant="outline" className="text-xs">
                  {metric.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Team Performance */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
                Team Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TeamPerformanceChart />
            </CardContent>
          </Card>

          {/* Completion Progress */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
                Project Completion Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CompletionProgress />
            </CardContent>
          </Card>
        </div>

        {/* Timeline and Capacity Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
                Project Timeline & Output Projection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TimelineChart />
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
                Capacity Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CapacityMetrics />
            </CardContent>
          </Card>
        </div>

        {/* Strategic Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
              Strategic Completion Plan & Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <StrategicRecommendations />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-4 border-t">
          McKinsey-Style Executive Dashboard | Generated for Project Completion Analysis
        </div>
      </div>
    </div>
  );
};

export default Index;
