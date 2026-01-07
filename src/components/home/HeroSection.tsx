import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Navigation } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HeroSection() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="gradient-navy py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 lowercase">
            partner for talent.
          </h1>

          {/* Search Form */}
          <div className="bg-background rounded-md p-2 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {/* Job Title Input */}
              <div className="md:col-span-1">
                <label className="block text-xs text-muted-foreground mb-1 px-2">search for</label>
                <Input
                  type="text"
                  placeholder="job title or keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="border-0 shadow-none focus-visible:ring-0 h-12"
                />
              </div>

              {/* Location Input */}
              <div className="md:col-span-1">
                <label className="block text-xs text-muted-foreground mb-1 px-2">where?</label>
                <Input
                  type="text"
                  placeholder="location or postcode"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 shadow-none focus-visible:ring-0 h-12"
                />
              </div>

              {/* Range Select */}
              <div className="md:col-span-1">
                <label className="block text-xs text-muted-foreground mb-1 px-2">range</label>
                <Select defaultValue="10">
                  <SelectTrigger className="border-0 shadow-none focus:ring-0 h-12">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 km</SelectItem>
                    <SelectItem value="10">10 km</SelectItem>
                    <SelectItem value="25">25 km</SelectItem>
                    <SelectItem value="50">50 km</SelectItem>
                    <SelectItem value="100">100 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1 flex items-end">
                <Button asChild className="w-full h-12 gradient-blue hover:opacity-90 text-white">
                  <Link to="/careers">
                    <Search className="mr-2 h-4 w-4" />
                    search 500+ jobs
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Use Current Location */}
          <button className="flex items-center gap-2 text-white/80 hover:text-white mt-4 text-sm transition-colors">
            <Navigation className="h-4 w-4" />
            use current location
          </button>
        </div>
      </div>
    </section>
  );
}
