import { formatAmount } from "@/lib/utils";
import { CreditCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link className="bank-card" href={"/"}>
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            <p className="font-ibm-flex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●●
              <span className="text-16">{1234}</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image alt="Pay" height={24} src={"/icons/Paypass.svg"} width={20} />
          <Image
            alt="Mastercard"
            className="ml-5"
            height={32}
            src={"/icons/mastercard.svg"}
            width={45}
          />
          <Image
            alt="LInes"
            className="absolute top-0 left-0"
            height={190}
            src={"/icons/Lines.svg"}
            width={316}
          />
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
