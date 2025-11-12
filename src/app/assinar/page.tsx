"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, CreditCard, Lock, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AssinarPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você integraria com um gateway de pagamento
    console.log("Processando assinatura:", formData)
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Comece Sua
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Jornada de Produtividade
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Assine agora e receba seu primeiro mapa mental hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plan Summary */}
            <Card className="border-2 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-2xl">Plano Mensal</CardTitle>
                <CardDescription>Acesso completo a todos os recursos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-6 border-y">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    R$ 9,90
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-2">por mês</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Mapas mentais personalizados diários</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Acesso a todos os pacotes temáticos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Envio por WhatsApp e e-mail</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Histórico completo de mapas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Suporte prioritário</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Cancele quando quiser</span>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 font-semibold">
                    <Lock className="w-4 h-4" />
                    <span className="text-sm">Garantia de 7 dias</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Se não gostar, devolvemos 100% do seu dinheiro sem perguntas
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  <CardTitle>Dados de Pagamento</CardTitle>
                </div>
                <CardDescription>
                  Preencha os dados abaixo para finalizar sua assinatura
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="João Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="joao@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Número do Cartão</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiry">Validade</Label>
                      <Input
                        id="cardExpiry"
                        placeholder="MM/AA"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCvc">CVV</Label>
                      <Input
                        id="cardCvc"
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, acceptTerms: checked as boolean })
                      }
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                      Aceito os{" "}
                      <Link href="/termos" className="text-purple-600 hover:underline">
                        termos de uso
                      </Link>{" "}
                      e{" "}
                      <Link href="/privacidade" className="text-purple-600 hover:underline">
                        política de privacidade
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    disabled={!formData.acceptTerms}
                  >
                    <Lock className="w-5 h-5 mr-2" />
                    Finalizar Assinatura
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Lock className="w-3 h-3" />
                    <span>Pagamento 100% seguro e criptografado</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="mt-8 border-2">
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou multas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Como funciona a garantia de 7 dias?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Se você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu dinheiro.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Posso trocar de pacote temático?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sim! Você tem acesso a todos os pacotes temáticos e pode alternar entre eles quando quiser.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
