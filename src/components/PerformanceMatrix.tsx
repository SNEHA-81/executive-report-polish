
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, ScatterChart, Scatter } from 'recharts';
import { TrendingUp, Users, Target } from "lucide-react";

const PerformanceMatrix = () => {
  const teamMatrix = [
    { name: 'Vishal Shaw', efficiency: 24.56, experience: 9, complexity: 8.5, quadrant: 'Star Performer' },
    { name: 'Rishav Verma', efficiency: 19.40, experience: 7, complexity: 7.2, quadrant: 'High Performer' },
    { name: 'Sneha', efficiency: 16.50, experience: 6, complexity: 6.8, quadrant: 'Solid Contributor' },
    { name: 'Zoa', efficiency: 16.67, experience: 5, complexity: 6.5, quadrant: 'Solid Contributor' },
    { name: 'Ashmit B', efficiency: 16.44, experience: 6, complexity: 6.7, quadrant: 'Solid Contributor' },
    { name: 'Rabab', efficiency: 14.72, experience: 4, complexity: 5.8, quadrant: 'Developing' },
    { name: 'Shalaj Singh', efficiency: 14.31, experience: 4, complexity: 5.5, quadrant: 'Developing' },
    { name: 'Kartik', efficiency: 14.29, experience: 8, complexity: 9.2, quadrant: 'Automation Specialist' }
  ];

  const weeklyTrends = [
    { week: 'Week 1', target: 82, actual: 120, forecast: 125 },
    { week: 'Week 2', target: 82, actual: 135, forecast: 140 },
    { week: 'Week 3', target: 82, actual: 142, forecast: 145 },
    { week: 'Current', target: 82, actual: 137, forecast: 150 }
  ];

  const getQuadrantColor = (quadrant: string) => {
    switch (quadrant) {
      case 'Star Performer': return '#10b981';
      case 'High Performer': return '#3b82f6';
      case 'Solid Contributor': return '#8b5cf6';
      case 'Automation Specialist': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b bg-slate-50">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <Target className="h-6 w-6 mr-2 text-purple-600" />
          Performance Matrix & Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Performance Scatter Plot */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Team Performance Matrix
            </h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    type="number" 
                    dataKey="experience" 
                    name="Experience Level"
                    domain={[0, 10]}
                    label={{ value: 'Experience Level', position: 'insideBottom', offset: -10 }}
                    fontSize={11}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="efficiency" 
                    name="Parts/Day"
                    label={{ value: 'Efficiency (Parts/Day)', angle: -90, position: 'insideLeft' }}
                    fontSize={11}
                  />
                  <Scatter name="Team Members" data={teamMatrix} fill="#8884d8">
                    {teamMatrix.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getQuadrantColor(entry.quadrant)} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Star Performer', 'High Performer', 'Solid Contributor', 'Automation Specialist'].map((quad) => (
                <Badge key={quad} className="text-xs" style={{ backgroundColor: getQuadrantColor(quad), color: 'white' }}>
                  {quad}
                </Badge>
              ))}
            </div>
          </div>

          {/* Weekly Performance Trends */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Weekly Performance Trends
            </h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyTrends} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" fontSize={11} />
                  <YAxis 
                    label={{ value: 'Parts/Day', angle: -90, position: 'insideLeft' }}
                    fontSize={11}
                  />
                  <Bar dataKey="target" fill="#e5e7eb" name="Target" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="actual" fill="#3b82f6" name="Actual" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="forecast" fill="#10b981" name="Forecast" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded"></div>
                <span className="text-xs text-slate-600">Target</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-xs text-slate-600">Actual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-xs text-slate-600">Forecast</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Performance Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
            <h5 className="font-semibold text-green-900 mb-2">Performance Leaders</h5>
            <p className="text-sm text-green-800">Top 25% performers averaging 21+ parts/day</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
            <h5 className="font-semibold text-blue-900 mb-2">Trend Analysis</h5>
            <p className="text-sm text-blue-800">67% above target with consistent growth trajectory</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-l-purple-500">
            <h5 className="font-semibold text-purple-900 mb-2">Optimization Opportunity</h5>
            <p className="text-sm text-purple-800">Skill transfer can boost bottom 25% by 15%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceMatrix;
