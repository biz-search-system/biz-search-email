import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface InviteEmailProps {
  username?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
}

export const InviteEmail = ({
  username,
  invitedByUsername,
  invitedByEmail,
  teamName,
}: InviteEmailProps) => {
  const previewText = `${teamName}への招待`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={"https://www.biz-search.tech/images/logo.png"}
                width="90"
                height="90"
                alt="logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
              <strong>{teamName}</strong>への招待
            </Heading>
            <Text className="text-[14px] text-black leading-[24px]">
              {username}様
            </Text>
            <Text className="text-[14px] text-black leading-[24px]">
              <strong>{invitedByUsername}</strong>（
              <Link
                href={`mailto:${invitedByEmail}`}
                className="text-blue-600 no-underline"
              >
                {invitedByEmail}
              </Link>
              ）から、<strong>{teamName}</strong>へ招待されました。
            </Text>
            <Text className="text-[14px] text-black leading-[24px]">
              下記のボタンをクリックして、アカウントを作成してください。
            </Text>
            <Section className="mt-[32px] mb-[32px] text-center">
              <Button
                className="bg-gray-800 rounded-xl text-white text-base font-medium no-underline text-center px-8 py-4"
                href="{{ .SiteURL }}/api/auth/confirm?token_hash={{ .TokenHash }}&amp;type=email&amp;next={{ .RedirectTo }}"
              >
                認証する
              </Button>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              この招待メールは<span className="text-black">{username}</span>
              様宛に送信されました。
              心当たりがない場合は、このメールを無視してください。
              アカウントの安全性について懸念がある場合は、このメールに返信してお問い合わせください。
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

InviteEmail.PreviewProps = {
  username: "山田太郎",
  invitedByUsername: "鈴木花子",
  invitedByEmail: "hanako.suzuki@example.com",
  teamName: "サンプルチーム",
} as InviteEmailProps;

export default InviteEmail;
