
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Shield, TrendingDown, Clock, Users } from "lucide-react";

const RiskAssessment = () => {
  const riskFactors = [
    {
      category: "Schedule Risk",
      level: "Low",
      probability: 15,
      impact: "Medium",
      description: "Current 2-week buffer provides adequate protection against minor delays",
      mitigation: "Maintain current velocity and resource allocation",
      icon: Clock,
      color: "green"
    },
    {
      category: "Resource Risk",
      level: "Low",
      probability: 20,
      impact: "High",
      description: "Key person dependency on top performers could impact delivery",
      mitigation: "Cross-training and knowledge transfer initiatives",
      icon: Users,
      color: "yellow"
    },
    {
      category: "Quality Risk",
      level: "Very Low",
      probability: 8,
      impact: "Low",
      description: "High first-pass success rate indicates robust quality processes",
      mitigation: "Continue quality checkpoints and peer reviews",
      icon: Shield,
      color: "green"
    },
    {
      category: "Technical Risk",
      level: "Low",
      probability: 12,
      impact: "Medium",
      description: "Automation processes stable with minimal technical debt",
      mitigation: "Regular system monitoring and backup procedures",
      icon: CheckCircle,
      color: "green"
    }
  ];

  const riskTrend = [
    { month: 'Sept', overall: 35, schedule: 25, resource: 40, quality: 15, technical: 20 },
    { month: 'Oct', overall: 28, schedule: 20, resource: 35, quality: 12, technical: 18 },
    { month: 'Nov', overall: 22, schedule: 15, resource: 25, quality: 10, technical: 15 },
    { month: 'Dec', overall: 18, schedule: 12, resource: 20, quality: 8, technical: 12 }
  ];

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'very low': return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-500' };
      case 'low': return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-500' };
      case 'medium': return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-500' };
      case 'high': return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-500' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-500' };
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-600';
      case 'yellow': return 'text-yellow-600';
      case 'red': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b bg-slate-50">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <Shield className="h-6 w-6 mr-2 text-green-600" />
          Risk Assessment & Mitigation Strategy
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Overall Risk Summary */}
        <div className="mb-8 p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-green-900 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Overall Risk Status: LOW
            </h4>
            <Badge className="bg-green-100 text-green-800">
              Risk Score: 18/100
            </Badge>
          </div>
          <p className="text-sm text-green-800">
            Project maintains low risk profile with strong performance indicators and adequate buffers. 
            Risk trend showing consistent improvement over past 4 months.
          </p>
        </div>

        {/* Risk Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {riskFactors.map((risk, index) => {
            const colors = getRiskColor(risk.level);
            return (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${colors.border} ${colors.bg}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <risk.icon className={`h-5 w-5 ${getIconColor(risk.color)}`} />
                    <h5 className="font-semibold text-slate-900">{risk.category}</h5>
                  </div>
                  <Badge className={`text-xs ${colors.bg} ${colors.text}`}>
                    {risk.level}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-slate-700">Probability:</span>
                      <span className="ml-1 text-slate-600">{risk.probability}%</span>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">Impact:</span>
                      <span className="ml-1 text-slate-600">{risk.impact}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-700 mb-2">{risk.description}</p>
                    <div className="p-2 bg-white rounded border">
                      <span className="text-xs font-medium text-slate-600">Mitigation: </span>
                      <span className="text-xs text-slate-600">{risk.mitigation}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Risk Trend Analysis */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
            <TrendingDown className="h-5 w-5 mr-2 text-green-600" />
            Risk Trend Analysis (4-Month View)
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {riskTrend.map((month, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-slate-700 w-12">{month.month}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${100 - month.overall}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-green-600 w-8">{month.overall}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <h5 className="font-medium text-slate-900">Key Risk Improvements:</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Schedule risk reduced by 52% through velocity optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Resource risk mitigated via cross-training initiatives
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Quality processes strengthened with 98.2% success rate
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Technical stability improved through automation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
          <h5 className="font-semibold text-blue-900 mb-3">Recommended Actions</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-blue-800">Immediate (Next 2 weeks):</span>
              <ul className="mt-1 space-y-1 text-blue-700">
                <li>• Continue monitoring team velocity</li>
                <li>• Implement knowledge sharing sessions</li>
              </ul>
            </div>
            <div>
              <span className="font-medium text-blue-800">Strategic (Next month):</span>
              <ul className="mt-1 space-y-1 text-blue-700">
                <li>• Document best practices for future projects</li>
                <li>• Prepare transition and handover plans</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessment;
