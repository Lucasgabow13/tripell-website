"use client";

import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export default function TeamCard({ name, role, photo, bio }: TeamCardProps) {
  return (
    <div className="group [perspective:900px] cursor-pointer">
      {/* Card */}
      <div className="relative aspect-[3/4] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front — photo */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden bg-neutral-100">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-top saturate-[0.6]"
          />
        </div>

        {/* Back — bio */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-neutral-900 text-white p-6 flex flex-col gap-4">
          <div className="border-b border-white/10 pb-4 shrink-0">
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-white/40 mt-1 tracking-[0.1em]">{role}</p>
          </div>
          <div className="overflow-y-auto flex-1">
            <p className="text-sm text-white/70 leading-relaxed">{bio}</p>
          </div>
        </div>
      </div>

      {/* Name below */}
      <div className="mt-4">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-neutral-400 mt-1 leading-snug">{role}</p>
      </div>
    </div>
  );
}
