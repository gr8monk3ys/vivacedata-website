"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";
import { teamMembers } from "@/constants/team";

const Team = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
            Our Experts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of AI experts brings together decades of experience across research, industry, and academia to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
            >
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-24 flex items-center justify-center">
                  <Avatar className="h-24 w-24 border-4 border-white translate-y-12">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-white text-blue-600 text-xl font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="pt-16 p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.socialLinks.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a 
                        href={member.socialLinks.twitter} 
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a 
                        href={member.socialLinks.github} 
                        className="text-gray-500 hover:text-gray-900 transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
