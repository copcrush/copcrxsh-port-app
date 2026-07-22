export function getContactEmail() {
  return (
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@copcrxsh.com"
  );
}
