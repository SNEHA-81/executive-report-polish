
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, CheckCircle, Shield, Zap, Users } from "lucide-react";

const ExecutiveInsights = () => {
  const criticalInsights = [
    {
      title: "Completion Status Secured",
      value: "91.8% Complete",
      description: "13,775 out of 15,000 parts completed. Only 1,225 parts remaining with 15 working days available. Current pace of 137 parts/day already exceeds required 82 parts/day by 67%.",
      icon: CheckCircle,
      type: "completion",
      confidence: "Guaranteed",
      action: "ON TRACK"
    },
    {
      title: "Enhanced Strategy Deployed",
      value: "225-230 Parts/Day",
      description: "Adding 2 skilled members + efficiency boost (17→19 parts/person) + parallel LTMC uploads creates 225-230 parts/day capacity. This provides 140+ parts/day buffer above requirement.",
      icon: TrendingUp,
      type: "strategy", 
      confidence: "Optimized",
      action: "ACCELERATED"
    },
    {
      title: "Buffer Capacity Established",
      value: "3-Week Completion",
      description: "Enhanced team can deliver 1,800 parts in 3 weeks vs 1,225 required. Massive buffer protects against any rework, validations, or unforeseen challenges.",
      icon: Shield,
      type: "buffer",
      confidence: "Protected",
      action: "RISK-FREE"
    },
    {
      title: "Team Performance Optimized",
      value: "10 FTE Team",
      description: "Current 7.5 effective team performing at 137 parts/day. Enhanced 10-person team with optimized workflows will deliver consistent 225+ parts/day output.",
      icon: Users,
      type: "team",
      confidence: "Stable",
      action: "OPTIMIZED"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'completion': return { bg: 'bg-green-100', text: 'text-green-800', icon: 'text-green-600', border: 'border-green-500' };
      case 'strategy': return { bg: 'bg-blue-100', text: 'text-blue-800', icon: 'text-blue-600', border: 'border-blue-500' };
      case 'buffer': return { bg: 'bg-emerald-100', text: 'text-emerald-800', icon: 'text-emerald-600', border: 'border-emerald-500' };
      case 'team': return { bg: 'bg-purple-100', text: 'text-purple-800', icon: 'text-purple-600', border: 'border-purple-500' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-800', icon: 'text-gray-600', border: 'border-gray-500' };
    }
  };

  return (
    <Card className="shadow-lg bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200">
      <CardHeader className="border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardTitle className="text-xl font-bold flex items-center">
          <Zap className="h-6 w-6 mr-3 text-yellow-300" />
          PROJECT COMPLETION STRATEGY - ENHANCED DELIVERY CONFIRMED
        </CardTitle>
        <p className="text-blue-100 text-sm font-medium">
          Clear path to completion with enhanced team capacity and buffer protection
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {criticalInsights.map((insight, index) => {
            const colors = getTypeColor(insight.type);
            return (
              <div key={index} className={`bg-white rounded-xl p-6 border-l-4 ${colors.border} shadow-md hover:shadow-lg transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <insight.icon className={`h-6 w-6 ${colors.icon}`} />
                    <h4 className="font-bold text-slate-900 text-lg">{insight.title}</h4>
                  </div>
                  <Badge className={`${colors.bg} ${colors.text} font-semibold px-3 py-1`}>
                    {insight.confidence}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900 block">{insight.value}</span>
                  <Badge className="mt-2 bg-slate-100 text-slate-700 font-medium">
                    {insight.action}
                  </Badge>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-sm font-medium">
                  {insight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Execution Plan */}
        <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white">
          <div className="flex items-start space-x-4">
            <Target className="h-8 w-8 text-green-200 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-xl mb-3">
                STRATEGIC EXECUTION PLAN - CLIENT CONFIDENCE RESTORED
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-lg">1,225 Parts</div>
                  <div className="text-green-100">Remaining to complete</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-lg">15 Days</div>
                  <div className="text-green-100">Time available</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-lg">82/day Required</div>
                  <div className="text-green-100">vs 225+ achievable</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-lg">174% Surplus</div>
                  <div className="text-green-100">Buffer capacity</div>
                </div>
              </div>
              <p className="mt-4 text-green-100 font-medium leading-relaxed">
                Enhanced strategy with 2 additional team members + efficiency optimization delivers 225-230 parts/day capacity. 
                This creates a massive 140+ parts/day buffer above the 82 parts/day requirement, ensuring risk-free completion 
                with substantial protection against any contingencies or rework needs.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveInsights;
