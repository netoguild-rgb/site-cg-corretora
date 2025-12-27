import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Olá! 👋 Sou o assistente virtual da CG. Posso te ajudar a encontrar o seguro ideal em menos de 2 minutos!',
    isBot: true,
  },
  {
    id: 2,
    text: 'Sobre qual tipo de seguro você gostaria de saber mais?',
    isBot: true,
  },
];

const quickReplies = ['Seguro Auto', 'Plano de Saúde', 'Seguro de Vida', 'Seguro Estagiário'];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot: false,
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: `Ótima escolha! Para ${text.toLowerCase()}, temos excelentes opções. Um de nossos especialistas entrará em contato em breve para apresentar as melhores condições. 😊`,
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-orange rounded-full shadow-orange flex items-center justify-center transition-all duration-300 hover:scale-110 group',
          isOpen && 'scale-0 opacity-0'
        )}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-navy text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-pulse-soft">
          1
        </span>
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          'fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden transition-all duration-300',
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        )}
      >
        {/* Header */}
        <div className="bg-gradient-orange p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-primary-foreground">
                Assistente CG
              </p>
              <p className="text-xs text-primary-foreground/80">Online agora</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            aria-label="Fechar chat"
          >
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[320px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex',
                message.isBot ? 'justify-start' : 'justify-end'
              )}
            >
              <div
                className={cn(
                  'max-w-[80%] p-3 rounded-2xl text-sm',
                  message.isBot
                    ? 'bg-muted text-foreground rounded-tl-none'
                    : 'bg-gradient-orange text-primary-foreground rounded-tr-none'
                )}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              onClick={() => handleSendMessage(reply)}
              className="px-3 py-1.5 text-xs font-medium bg-muted hover:bg-primary/10 text-foreground rounded-full transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="flex gap-2"
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1"
            />
            <Button type="submit" size="icon" className="shrink-0">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
