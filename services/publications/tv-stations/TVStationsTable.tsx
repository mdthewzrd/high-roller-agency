"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, MapPin, DollarSign, Clock, Video, Users, Star } from "lucide-react";

interface TVStation {
  callSign: string;
  station: string;
  rate: number;
  tat: string;
  sponsored: boolean;
  indexed: boolean;
  segmentLength: string;
  location: string;
  programName: string;
  interviewType: string;
  example: string;
}

// TV Station data from the provided list
const tvStationsData: TVStation[] = [
  { callSign: "KDAF", station: "Dallas Area Fox", rate: 1000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Texas", programName: "Innovator's Journey", interviewType: "Video Call", example: "" },
  { callSign: "KSWB", station: "Fox 5 San Diego", rate: 1000, tat: "1 Week", sponsored: true, indexed: false, segmentLength: "5-10 Minutes", location: "California", programName: "Innovator's Journey", interviewType: "Video Call", example: "" },
  { callSign: "USA Today TV", station: "USA Today", rate: 5000, tat: "1-2 Weeks", sponsored: false, indexed: true, segmentLength: "3-5 Minutes", location: "United States", programName: "Contributor Content", interviewType: "Video Call", example: "" },
  { callSign: "PIX11", station: "WPIX-TV", rate: 1000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "New York", programName: "Innovator's Journey", interviewType: "Video Call", example: "" },
  { callSign: "WNCT", station: "CBS", rate: 1600, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "North Carolina", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "WCMH", station: "NBC", rate: 3000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Ohio", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "KWBQ", station: "CW", rate: 2000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "New Mexico", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "WHO", station: "NBC", rate: 2000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Iowa", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "WKRN", station: "ABC", rate: 4000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Tennessee", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "KIAH", station: "CW", rate: 3500, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Texas", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "KHON", station: "Fox", rate: 5000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Hawaii", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "KTVI", station: "Fox", rate: 3000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Missouri", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "WHBF", station: "CBS", rate: 800, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Illinois", programName: "LifeStyle Segment", interviewType: "Zoom", example: "" },
  { callSign: "KLBK", station: "CBS", rate: 1500, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Texas", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "WBTW", station: "CBS", rate: 1000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "SC-NC", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "KTLA", station: "CW", rate: 31000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "California", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "WQRF", station: "Fox", rate: 2000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Illinois", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "WJW", station: "Fox", rate: 10000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Ohio", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "KTVX", station: "ABC", rate: 6000, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "Utah", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
  { callSign: "KGET", station: "NBC", rate: 800, tat: "1 Week", sponsored: true, indexed: true, segmentLength: "5-10 Minutes", location: "California", programName: "LifeStyle Segment", interviewType: "Satellite, Studio", example: "" },
];

export default function TVStationsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [networkFilter, setNetworkFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rate");

  const networks = Array.from(new Set(tvStationsData.map(station => station.station)));
  const locations = Array.from(new Set(tvStationsData.map(station => station.location)));

  const filteredAndSortedStations = useMemo(() => {
    const filtered = tvStationsData.filter(station => {
      const matchesSearch = 
        station.callSign.toLowerCase().includes(searchTerm.toLowerCase()) ||
        station.station.toLowerCase().includes(searchTerm.toLowerCase()) ||
        station.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        station.programName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesNetwork = networkFilter === "all" || station.station === networkFilter;
      const matchesLocation = locationFilter === "all" || station.location === locationFilter;

      return matchesSearch && matchesNetwork && matchesLocation;
    });

    // Sort stations
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rate":
          return b.rate - a.rate;
        case "location":
          return a.location.localeCompare(b.location);
        case "station":
          return a.station.localeCompare(b.station);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, networkFilter, locationFilter, sortBy]);

  const getNetworkColor = (station: string) => {
    if (station.includes("Fox")) return "bg-orange-500";
    if (station.includes("NBC")) return "bg-red-500";
    if (station.includes("CBS")) return "bg-blue-500";
    if (station.includes("ABC")) return "bg-green-500";
    if (station.includes("CW")) return "bg-purple-500";
    return "bg-gray-500";
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Users className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{tvStationsData.length}</p>
                <p className="text-sm text-muted-foreground">TV Stations</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{locations.length}</p>
                <p className="text-sm text-muted-foreground">Locations</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">${Math.round(tvStationsData.reduce((sum, station) => sum + station.rate, 0) / tvStationsData.length).toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Avg. Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Star className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{networks.length}</p>
                <p className="text-sm text-muted-foreground">Networks</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stations, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={networkFilter} onValueChange={setNetworkFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Network" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Networks</SelectItem>
                {networks.map((network) => (
                  <SelectItem key={network} value={network}>
                    {network}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rate">Rate (High to Low)</SelectItem>
                <SelectItem value="location">Location</SelectItem>
                <SelectItem value="station">Network</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Showing {filteredAndSortedStations.length} of {tvStationsData.length} TV stations
        </p>
      </div>

      {/* TV Stations Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Call Sign</TableHead>
                  <TableHead>Network</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>TAT</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Interview Type</TableHead>
                  <TableHead>Segment Length</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedStations.map((station, index) => (
                  <TableRow key={`${station.callSign}-${index}`}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getNetworkColor(station.station)}`} />
                        {station.callSign}
                      </div>
                    </TableCell>
                    <TableCell>{station.station}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        {station.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3 text-green-500" />
                        {station.rate.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        {station.tat}
                      </div>
                    </TableCell>
                    <TableCell>{station.programName}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Video className="h-3 w-3 text-muted-foreground" />
                        {station.interviewType}
                      </div>
                    </TableCell>
                    <TableCell>{station.segmentLength}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Badge variant={station.sponsored ? "default" : "secondary"} className="text-xs">
                          {station.sponsored ? "Sponsored" : "Editorial"}
                        </Badge>
                        {station.indexed && (
                          <Badge variant="outline" className="text-xs border-green-500 text-green-400">
                            Indexed
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" className="green-gradient-bg">
                        Book Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}