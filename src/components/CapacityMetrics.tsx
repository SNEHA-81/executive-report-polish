
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CapacityMetrics = () => {
  const metrics = [
    {
      label: "Effective Team Size",
      value: "7.5 FTE",
      status: "stable"
    },
    {
      label: "Hours per Person/Week",
      value: "40 hrs",
      status: "standard"
    },
    {
      label: "Productive Time",
      value: "30 hrs",
      status: "realistic"
    },
    {
      label: "Time per Part",
      value: "30 min",
      status: "average"
    },
    {
      label: "Weekly Output/Person",
      value: "60 parts",
      status: "target"
    },
    {
      label: "Total Weekly Capacity",
      value: "600 parts",
      status: "projected"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-800';
      case 'target': return 'bg-blue-100 text-blue-800';
      case 'projected': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium text-gray-700">
            {metric.label}
          </span>
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
      
      <Card className="mt-6 bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <h4 className="font-semibold text-blue-900 mb-2">3-Week Projection</h4>
          <p className="text-sm text-blue-800">
            With current capacity, team can complete up to <strong>1,800 parts</strong> 
            in remaining time, exceeding the required <strong>1,225 parts</strong> by 47%.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CapacityMetrics;
