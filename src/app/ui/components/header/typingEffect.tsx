"use client"
import { useEffect, useState } from 'react';

const words = ['técnologia', 'prosperidade', 'o futuro',];

export default function TypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (wordIndex >= words.length) return;

    if (subIndex === words[wordIndex].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, wordIndex, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <h1 className="text-3xl font-semibold">
      Urbanflow é {' '}
      <span className="text-white">
        {words[wordIndex].substring(0, subIndex)}
        <span className="inline-block w-[1ch]">{blink ? '|' : ' '}</span>
      </span>
    </h1>
  );
}