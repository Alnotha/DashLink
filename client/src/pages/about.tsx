import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <main className="container py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Alyan Tharani</h1>

        <Card className="mb-12">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-6">
              With years of experience in the convenience store and gas station industry,
              Alyan Tharani understands the challenges that business owners face in 
              adapting to the modern delivery ecosystem.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to help businesses thrive in the digital age by providing
              expert management of delivery platform integrations, allowing owners to 
              focus on what they do best - running their business.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-6">My Commitment</h2>
        <div className="grid gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Expert Management</h3>
              <p>
                I handle all aspects of your delivery platform presence, from initial 
                setup to ongoing optimization and support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p>
                My team is always available to address your concerns and ensure 
                smooth operations across all delivery platforms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Growth Focus</h3>
              <p>
                I'm committed to helping your business grow by maximizing the 
                potential of delivery platforms through data-driven strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}