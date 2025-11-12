"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Sparkles, Calendar, Download, Mail, MessageSquare, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

export default function MembrosPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [showMindMap, setShowMindMap] = useState(false)
  const [formData, setFormData] = useState({
    feeling: "",
    objective: "",
    challenges: "",
  })

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simula geração do mapa mental
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)
    setShowMindMap(true)
  }

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de receber meu mapa mental diário pelo WhatsApp.")
    window.open(`https://wa.me/?text=${message}`, '_blank')
  }

  const handleSendEmail = () => {
    window.location.href = "mailto:?subject=Meu Mapa Mental Diário&body=Aqui está meu mapa mental do dia!"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mapa Mental Diário
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-0">
              Membro Ativo
            </Badge>
            <Button variant="ghost" size="sm">Sair</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Link>

        <div className="max-w-5xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Bem-vindo à
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Área de Membros
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Crie seu mapa mental personalizado do dia
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Mapas Criados</CardDescription>
                <CardTitle className="text-3xl">24</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Dias Consecutivos</CardDescription>
                <CardTitle className="text-3xl">12</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Pacote Ativo</CardDescription>
                <CardTitle className="text-xl">Alta Performance</CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Section */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <CardTitle>Crie Seu Mapa do Dia</CardTitle>
                </div>
                <CardDescription>
                  Responda as perguntas abaixo para gerar seu mapa mental personalizado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="feeling">Como você está se sentindo hoje?</Label>
                  <Input
                    id="feeling"
                    placeholder="Ex: Motivado, cansado, ansioso..."
                    value={formData.feeling}
                    onChange={(e) => setFormData({ ...formData, feeling: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objective">Qual seu objetivo principal do dia?</Label>
                  <Input
                    id="objective"
                    placeholder="Ex: Finalizar projeto, estudar..."
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenges">Quais desafios você enfrenta hoje?</Label>
                  <Textarea
                    id="challenges"
                    placeholder="Descreva os principais desafios..."
                    rows={4}
                    value={formData.challenges}
                    onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                  />
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  size="lg"
                  onClick={handleGenerate}
                  disabled={isGenerating || !formData.feeling || !formData.objective}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Gerando Mapa...
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5 mr-2" />
                      Gerar Mapa Mental
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Mind Map Preview */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-cyan-600" />
                    <CardTitle>Seu Mapa Mental</CardTitle>
                  </div>
                  {showMindMap && (
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-0">
                      Gerado
                    </Badge>
                  )}
                </div>
                <CardDescription>
                  Visualize e compartilhe seu mapa personalizado
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showMindMap ? (
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <Brain className="w-16 h-16 text-purple-400 mx-auto opacity-50" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Preencha o formulário e clique em "Gerar Mapa Mental"
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Mind Map Visualization */}
                    <div className="aspect-square rounded-xl bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-purple-800 p-6 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto">
                          <span className="text-white font-bold text-lg">Objetivo</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-semibold">
                            Ação 1
                          </div>
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-semibold">
                            Ação 2
                          </div>
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xs font-semibold">
                            Ação 3
                          </div>
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                            Ação 4
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-1" />
                        Baixar
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" onClick={handleSendWhatsApp}>
                        <MessageSquare className="w-4 h-4 mr-1" />
                        WhatsApp
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" onClick={handleSendEmail}>
                        <Mail className="w-4 h-4 mr-1" />
                        E-mail
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* History Section */}
          <Card className="mt-8 border-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                <CardTitle>Histórico de Mapas</CardTitle>
              </div>
              <CardDescription>
                Acesse seus mapas mentais anteriores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: "Hoje", title: "Foco em Alta Performance", badge: "Novo" },
                  { date: "Ontem", title: "Desbloqueio Criativo", badge: null },
                  { date: "2 dias atrás", title: "Rotina Empreendedora", badge: null },
                  { date: "3 dias atrás", title: "Planejamento Estratégico", badge: null },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-purple-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-0">
                          {item.badge}
                        </Badge>
                      )}
                      <Button variant="ghost" size="sm">Ver</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
