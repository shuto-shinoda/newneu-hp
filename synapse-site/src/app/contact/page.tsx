"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Dummy submission
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            label="Contact"
            title="お問い合わせ"
            description="イベントに関するご質問、出演依頼、コラボレーションのご提案など、お気軽にお問い合わせください。"
          />

          {submitted ? (
            <div className="rounded-lg bg-dark-800 border border-neon-cyan/20 p-8 text-center">
              <svg className="h-12 w-12 text-neon-cyan mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-white mb-2">送信完了</h3>
              <p className="text-sm text-zinc-400">
                お問い合わせいただきありがとうございます。内容を確認の上、ご返信いたします。
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-neon-cyan hover:underline"
              >
                新しいお問い合わせ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  お名前 <span className="text-neon-magenta">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg bg-dark-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  メールアドレス <span className="text-neon-magenta">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg bg-dark-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-zinc-300 mb-2">
                  カテゴリ
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full rounded-lg bg-dark-800 border border-white/10 px-4 py-3 text-sm text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-colors"
                >
                  <option value="general">一般的なお問い合わせ</option>
                  <option value="booking">出演依頼</option>
                  <option value="collaboration">コラボレーション</option>
                  <option value="press">プレス/メディア</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  メッセージ <span className="text-neon-magenta">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg bg-dark-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-colors resize-none"
                  placeholder="お問い合わせ内容をご入力ください"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-neon-cyan to-neon-magenta px-8 py-4 text-base font-bold text-dark-950 hover:opacity-90 transition-opacity"
              >
                送信する
              </button>
            </form>
          )}

          {/* Alternative contact */}
          <div className="mt-12 text-center">
            <p className="text-sm text-zinc-500">
              メールでのお問い合わせ：
              <a
                href="mailto:info@synapse-event.com"
                className="text-neon-cyan hover:underline ml-1"
              >
                info@synapse-event.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
