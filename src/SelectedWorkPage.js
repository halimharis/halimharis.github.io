import React from "react";
import { useParams } from "react-router-dom";

export default function SelectedWorkPage() {
  const { WorkId } = useParams();
  return (
    <div className="min-h-screen max-w-screen-lg border w-full">
      <div className="mt-24">asd</div>
    </div>
  );
}
