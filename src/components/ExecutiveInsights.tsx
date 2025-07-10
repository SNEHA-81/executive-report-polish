
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, Zap, AlertTriangle, CheckCircle } from "lucide-react";

const ExecutiveInsights = () => {
  const insights = [
    {
      title: "Velocity Acceleration",
      value: "+67%",
      description: "Team output exceeds target by 55 parts/day, indicating strong process optimization",
      icon: TrendingUp,
      type: "positive",
      impact: "High"
    },
    {
      title: "Early Completion Probability",
      value: "94%",
      description: "Statistical analysis suggests 2-week early completion with current trajectory",
      icon: Target,
      type: "positive",
      impact: "High"
    },
    {
      title: "Resource Optimization",
      value: "98.2%",
      description: "Near-optimal team utilization with minimal idle time across all specialists",
      icon: Users,
      type: "positive",
      impact: "Medium"
    },
    {
      title: "Process Efficiency",
      value: "+23%",
      description: "Automation and workflow improvements driving significant productivity gains",
      icon: Zap,
      type: "positive",
      impact: "High"
    }
  ];

  const getIconColor = (type: string) => {
    return type === 'positive' ? 'text-green-600' : type === 'warning' ? 'text-orange-600' : 'text-red-600';
  };

  const getBadgeColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardHeader className="border-b">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
          Executive Insights & Key Findings
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <insight.icon className={`h-5 w-5 ${getIconColor(insight.type)}`} />
                  <h4 className="font-semibold text-slate-900">{insight.title}</h4>
                </div>
                <Badge className={`text-xs ${getBadgeColor(insight.impact)}`}>
                  {insight.impact} Impact
                </Badge>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-slate-900">{insight.value}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Executive Summary */}
        <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-l-green-500">
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
            <Target className="h-4 w-4 mr-2 text-green-600" />
            Executive Summary
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            The SAP Master Data Simplification project is performing exceptionally well, with team velocity 
            67% above target and 94% probability of early completion. Current trajectory suggests project 
            completion 2 weeks ahead of schedule with maintained quality standards. Resource optimization 
            and process improvements are driving significant efficiency gains.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveInsights;
