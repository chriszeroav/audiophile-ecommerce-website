"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

interface GoBackProps {}

export const GoBack: FC<GoBackProps> = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="px-4">
      <div className="max-w-custom mx-auto">
        <Button
          onClick={handleGoBack}
          variant="ghost"
          className="text-body"
          size="none"
        >
          Go Back
        </Button>
      </div>
    </section>
  );
};
