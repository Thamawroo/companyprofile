"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
  };
}

interface TeamsPageProps {
  numberOfMembers: number;
}

export function TeamsPage({ numberOfMembers }: TeamsPageProps) {
    const [teamData, setTeamData] = useState<TeamMember[]>([]);
  
    useEffect(() => {
      fetch(`https://randomuser.me/api/?results=${numberOfMembers}`)
        .then((response) => response.json())
        .then((data) => {
          const members: TeamMember[] = data.results.map((result: any) => ({
            name: {
              first: result.name.first,
              last: result.name.last,
            },
            email: result.email,
            picture: {
              thumbnail: result.picture.thumbnail,
            },
          }));
          setTeamData(members);
        });
    }, [numberOfMembers]);
  
    // Bagi daftar anggota tim menjadi dua bagian
    const firstHalf = teamData.slice(0, Math.ceil(teamData.length / 2));
    const secondHalf = teamData.slice(Math.ceil(teamData.length / 2));
  
    return (
      <div className="container pt-20 pb-36">
        <div className="lg:grid lg:grid-cols-2 gap-10" style={{ marginTop: "-200px" }}>
          <div className="lg:col-span-2">
          <p className="text-3xl font-semibold ml-40 mb-1">Meet</p>
            <p className="text-5xl text-amber-400 mb-4">Our Team Players</p>
          </div>
          <div className="space-y-4 lg:col-span-1">
            {/* Render anggota tim bagian pertama */}
            {firstHalf.map((member, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={member.picture.thumbnail}
                    alt={member.name.first}
                    width={70}
                    height={80}
                  />
                </div>
                <div>
                  <p className="font-semibold">{`${member.name.first} ${member.name.last}`}</p>
                  <p className="text-sm">{member.email}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4 lg:col-span-1">
            {/* Render anggota tim bagian kedua */}
            {secondHalf.map((member, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={member.picture.thumbnail}
                    alt={member.name.first}
                    width={60}
                    height={80}
                  />
                </div>
                <div>
                  <p className="font-semibold">{`${member.name.first} ${member.name.last}`}</p>
                  <p className="text-sm">{member.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
