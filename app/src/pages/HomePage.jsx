import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, HeartHandshake, Leaf, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <main className="min-h-screen bg-[#F4EEB]">
            <section className="container mx-auto grid min-h-[80vh] items-center gap-12 px-6 lg:grid-cols-2">
                <section className="max-w-2xl space-y-6">
                    <div>
                        <span className="rounded-full bg-[#877E5F] px-4 py-2 text-sm font-medium">
                            Wellness ~ Relaxation ~ Beauty
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold text-[#444413] md:text-6xl">
                        Your Moment of Peace Starts Here
                    </h1>

                    <p className="text-lg text-[#656352]">
                        Enjoy relaxing massages, facial treatments, and wellness
                        experiences designed to renew your body and mind.
                    </p>

                    <div className="flex gap-4">

                        <Button size="lg">
                            Book an Appointment
                        </Button>

                        <Button asChild size="lg" variant="outline" className="rounded-full">
                            <Link to="/serviceslist">
                                Explore Services
                            </Link>
                        </Button>


                    </div>
                </section>

                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <HeroCarousel />

                    <Card className="absolute bottom-6 left-6 backdrop-blur bg-white/70 border-none shadow-lg">
                        <CardContent className="p-4">
                            <p className="font-semibold">+500 Happy Clients</p>
                            <p className="flex items-center gap-1 text-sm">
                                Rated 4.9/5 <Star className="size-4 text-black fill-amber-400" />
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>


            <section className="container mx-auto grid gap-6 px-6 pb-20 md:grid-cols-3">
                <Card>
                    <CardContent className="space-y-3 p-6">
                        <Sparkles className="h-8 w-8 text-rose-500" />

                        <h3 className="text-lg font-semibold">
                            Premium Treatments
                        </h3>

                        <p className="text-sm text-gray-600">
                            High-quality products and personalized treatments for healthy,
                            radiant skin.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-3 p-6">
                        <Leaf className="h-8 w-8 text-green-500" />

                        <h3 className="text-lg font-semibold">
                            Natural Environment
                        </h3>

                        <p className="text-sm text-gray-600">
                            A peaceful space created to help you disconnect from everyday
                            stress.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-3 p-6">
                        <HeartHandshake className="h-8 w-8 text-pink-500" />

                        <h3 className="text-lg font-semibold">
                            Personalized Care
                        </h3>

                        <p className="text-sm text-gray-600">
                            Every treatment is tailored to your unique needs and wellness
                            goals.
                        </p>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
