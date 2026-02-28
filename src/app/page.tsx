import { ChatContainer } from '@/components/wiki-agent/chat-container';

export default function Home() {
    return (
        <main className="flex flex-col h-screen bg-background">
            <header className="border-b px-6 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-foreground">WikiAgent</h1>
                        <p className="text-xs text-muted-foreground">AI-Powered Wikipedia Assistant</p>
                    </div>
                </div>
            </header>
            <div className="flex-1 overflow-hidden">
                <ChatContainer />
            </div>
        </main>
    );
}