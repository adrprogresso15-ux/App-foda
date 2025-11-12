"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Sparkles, Target, Rocket, CheckCircle, ArrowRight, Zap, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header/Navbar */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mapa Mental Diário
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Como Funciona
            </Link>
            <Link href="#pacotes" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Pacotes
            </Link>
            <Link href="/membros" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Área de Membros
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link href="/assinar">
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Assinar Agora
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-0">
            <Sparkles className="w-3 h-3 mr-1" />
            Organize suas ideias com inteligência
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Mapas Mentais Personalizados
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Todos os Dias
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ajudamos pessoas criativas a organizarem suas ideias, aumentarem o foco e desbloquearem a produtividade através de mapas mentais inteligentes e personalizados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/assinar">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#como-funciona">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Ver Como Funciona
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Apenas R$ 9,90/mês</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simples, rápido e personalizado para você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-purple-300 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>1. Responda Perguntas</CardTitle>
                <CardDescription>
                  Perguntas simples como "Como você está se sentindo hoje?" ou "Qual seu objetivo do dia?"
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-300 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle>2. Receba seu Mapa</CardTitle>
                <CardDescription>
                  Geramos um mapa mental personalizado baseado nas suas respostas e objetivos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-300 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <CardTitle>3. Organize e Execute</CardTitle>
                <CardDescription>
                  Use seu mapa para organizar ideias, aumentar foco e desbloquear sua produtividade
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Transforme Ideias em
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ação Concreta
                </span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Clareza Mental</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Organize pensamentos complexos de forma visual e intuitiva
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Foco Aumentado</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Priorize o que realmente importa e elimine distrações
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Produtividade Desbloqueada</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Execute suas ideias com mais velocidade e eficiência
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Personalização Total</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cada mapa é único e adaptado ao seu momento e objetivos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-purple-500 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pacotes Temáticos */}
      <section id="pacotes" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pacotes Temáticos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mapas especializados para diferentes objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-purple-500 transition-all hover:shadow-2xl hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Desbloqueio Criativo</CardTitle>
                <CardDescription className="text-base">
                  Para artistas, designers e criadores que buscam inspiração e fluxo criativo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Técnicas de brainstorming
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Exercícios de desbloqueio
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Conexões criativas
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Explorar Pacote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-500 transition-all hover:shadow-2xl hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Alta Performance</CardTitle>
                <CardDescription className="text-base">
                  Para profissionais que querem maximizar produtividade e resultados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Priorização estratégica
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Gestão de energia
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Foco profundo
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                  Explorar Pacote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-500 transition-all hover:shadow-2xl hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Rotina Empreendedora</CardTitle>
                <CardDescription className="text-base">
                  Para empreendedores que precisam equilibrar múltiplas frentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Planejamento estratégico
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Tomada de decisão
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Visão de negócio
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  Explorar Pacote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-0 mx-auto mb-4">
                  Oferta de Lançamento
                </Badge>
                <CardTitle className="text-4xl md:text-5xl mb-4">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    R$ 9,90
                  </span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400">/mês</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Acesso ilimitado a todos os mapas mentais e pacotes temáticos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Mapas mentais personalizados diários</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Acesso a todos os pacotes temáticos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Envio por WhatsApp e e-mail</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Histórico completo de mapas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Cancele quando quiser</span>
                  </div>
                </div>

                <Link href="/assinar" className="block">
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                    Começar Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <p className="text-center text-sm text-gray-500">
                  Garantia de 7 dias • Cancele quando quiser
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">Mapa Mental Diário</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Organize suas ideias e desbloqueie sua produtividade
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="#como-funciona" className="hover:text-purple-600">Como Funciona</Link></li>
                <li><Link href="#pacotes" className="hover:text-purple-600">Pacotes</Link></li>
                <li><Link href="/assinar" className="hover:text-purple-600">Preços</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="/ajuda" className="hover:text-purple-600">Central de Ajuda</Link></li>
                <li><Link href="/contato" className="hover:text-purple-600">Contato</Link></li>
                <li><Link href="/faq" className="hover:text-purple-600">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="/termos" className="hover:text-purple-600">Termos de Uso</Link></li>
                <li><Link href="/privacidade" className="hover:text-purple-600">Privacidade</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2024 Mapa Mental Diário. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
