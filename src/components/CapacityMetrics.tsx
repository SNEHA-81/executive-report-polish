
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CapacityMetrics = () => {
  const currentMetrics = [
    {
      label: "Current Team Size",
      value: "7.5 FTE",
      status: "baseline",
      description: "Effective team members"
    },
    {
      label: "Current Daily Output",
      value: "137 parts",
      status: "current",
      description: "Average performance"
    },
    {
      label: "Required Daily Pace",
      value: "82 parts",
      status: "target",
      description: "To complete on time"
    }
  ];

  const enhancedMetrics = [
    {
      label: "Enhanced Team Size",
      value: "10 FTE",
      status: "enhanced",
      description: "+2 skilled members"
    },
    {
      label: "Enhanced Daily Output",
      value: "225-230 parts",
      status: "projected",
      description: "With optimizations"
    },
    {
      label: "Daily Buffer Created",
      value: "140+ parts",
      status: "buffer",
      description: "Safety margin"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'enhanced': return 'bg-blue-100 text-blue-800';
      case 'projected': return 'bg-green-100 text-green-800';
      case 'buffer': return 'bg-emerald-100 text-emerald-800';
      case 'current': return 'bg-orange-100 text-orange-800';
      case 'target': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Status */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">CURRENT STATUS</h4>
        <div className="space-y-3">
          {currentMetrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <span className="text-sm font-medium text-gray-700">
                  {metric.label}
                </span>
                <p className="text-xs text-gray-500">{metric.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-gray-900">
                  {metric.value}
                </span>
                <Badge className={`text-xs ${getStatusColor(metric.status)}`}>
                  {metric.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Strategy */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">ENHANCED STRATEGY</h4>
        <div className="space-y-3">
          {enhancedMetrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <span className="text-sm font-medium text-blue-900">
                  {metric.label}
                </span>
                <p className="text-xs text-blue-600">{metric.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-blue-900">
                  {metric.value}
                </span>
                <Badge className={`text-xs ${getStatusColor(metric.status)}`}>
                  {metric.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Card className="mt-6 bg-green-50 border-green-200">
        <CardContent className="p-4">
          <h4 className="font-semibold text-green-900 mb-2">Completion Projection</h4>
          <p className="text-sm text-green-800 mb-3">
            With enhanced team capacity of <strong>225-230 parts/day</strong>, 
            the remaining <strong>1,225 parts</strong> can be completed in just <strong>5-6 days</strong>.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="bg-white/50 rounded p-2">
              <div className="font-bold text-green-900">Time Buffer</div>
              <div className="text-green-700">9-10 extra days</div>
            </div>
            <div className="bg-white/50 rounded p-2">
              <div className="font-bold text-green-900">Capacity Buffer</div>
              <div className="text-green-700">174% surplus</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CapacityMetrics;
