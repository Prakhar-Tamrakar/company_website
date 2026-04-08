import { notFound } from "next/navigation";
import { Sparkles } from "lucide-react";
import { products } from "../productData";
import Image from "next/image";

import Section from "@/components/layouts/Section";
import ProductEnquiryForm from "../ProductEnquiryForm";
import OtherProductsSlider from "../OtherProductsSlider";

export default async function ProductDetail(props) {
  const params = await props.params;
  const id = params.id;
  const data = products.find((item) => item.id === id);
  if (!data) notFound();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section
        size="hero"
        className="relative h-[60vh] min-h-[500px] w-full overflow-hidden py-0!"
      >
        <Image
          src={data.image}
          alt={data.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 h-full">
          <div className="container mx-auto flex h-full items-end px-6 pb-12 lg:pb-16">
            <div className="max-w-5xl text-white">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/70">
                {data.category}
              </p>
              <h1 className="text-4xl font-semibold font-playfair leading-tight md:text-5xl lg:text-6xl">
                {data.name}
              </h1>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section size="lg">
        <div className="container mx-auto max-w-5xl px-6">
          {/* Overview */}
          <p className="mb-16 text-xl leading-relaxed text-gray-600 md:text-xl">
            {data.overview}
          </p>

          {/* Description */}
          <div className="mb-20">
            <h2 className="mb-6 text-3xl font-regular heading-default ">
              What We Offer
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {data.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="mb-8 text-3xl font-regular  heading-default">
              Key Features
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-5 text-gray-700 transition hover:border-primary/40"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 p-8 md:p-12 mb-8">
            <div className="absolute -right-8 -top-8 opacity-60">
              <div className="bg-primary w-100 h-100 rounded-full flex items-center justify-center">
                <div className=" bg-blue-400 w-80 h-80 rounded-full"></div>
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-regular heading-default">
              {" "}
              Outcome
            </h2>
            <p className="relative z-10 text-lg leading-relaxed text-gray-700">
              {data.outcome}
            </p>
          </div>
          <OtherProductsSlider excludeId={id} />
          <ProductEnquiryForm name={data.name} />
        </div>
      </Section>
    </main>
  );
}
