import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Box, Wrench, PenTool } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Leading Industrial Solutions
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                            Powering Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                Business Growth
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-lg">
                            Your one-stop partner for General Trading, Electrical Support,
                            Stationary, and Industrial Equipment. We deliver excellence in every supply.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="h-12 px-8 text-base">
                                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            {/* <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                                Contact Sales
                            </Button> */}
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t">
                            <div>
                                <h3 className="text-3xl font-bold">500+</h3>
                                <p className="text-sm text-muted-foreground">Clients Served</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">24/7</h3>
                                <p className="text-sm text-muted-foreground">Support</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">100%</h3>
                                <p className="text-sm text-muted-foreground">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl rotate-3" />
                        <div className="absolute inset-0 bg-background border rounded-3xl -rotate-3 shadow-2xl overflow-hidden p-8">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="space-y-4 pt-12">
                                    <div className="p-6 bg-muted/50 rounded-2xl border hover:border-primary/50 transition-colors">
                                        <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                                        <h3 className="font-semibold mb-2">Electrical</h3>
                                        <p className="text-sm text-muted-foreground">Complete electrical support and components.</p>
                                    </div>
                                    <div className="p-6 bg-muted/50 rounded-2xl border hover:border-primary/50 transition-colors">
                                        <Box className="w-10 h-10 text-blue-500 mb-4" />
                                        <h3 className="font-semibold mb-2">Trading</h3>
                                        <p className="text-sm text-muted-foreground">Global sourcing and supply chain solutions.</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-6 bg-muted/50 rounded-2xl border hover:border-primary/50 transition-colors">
                                        <Wrench className="w-10 h-10 text-green-500 mb-4" />
                                        <h3 className="font-semibold mb-2">Industrial</h3>
                                        <p className="text-sm text-muted-foreground">Heavy equipment and machinery parts.</p>
                                    </div>
                                    <div className="p-6 bg-muted/50 rounded-2xl border hover:border-primary/50 transition-colors">
                                        <PenTool className="w-10 h-10 text-purple-500 mb-4" />
                                        <h3 className="font-semibold mb-2">Stationary</h3>
                                        <p className="text-sm text-muted-foreground">Premium office supplies and equipment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
