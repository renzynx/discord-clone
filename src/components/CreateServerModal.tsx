import Button from "@/components/Button";
import Input from "@/components/Input";
import NavItem from "@/components/NavItem";
import useSupabase from "@/hooks/useSupabase";
import useAuthStore from "@/stores/auth.store";
import dynamic from "next/dynamic";
import { FC, ReactNode, useState } from "react";

const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });
import { FiChevronRight } from "react-icons/fi";

type Props = {
  step: number;
  setStep: (step: number) => void;
};

const items = [
  {
    text: "Gaming",
    image: "/gaming.svg",
  },
  {
    text: "School Club",
    image: "/school_club.svg",
  },
  {
    text: "Study Group",
    image: "/study_group.svg",
  },
  {
    text: "Friends",
    image: "/friend.svg",
  },
  {
    text: "Artists & Creators",
    image: "/artist_creator.svg",
  },
  {
    text: "Local Community",
    image: "/local_community.svg",
  },
];

const FirstStep = ({ setStep, step }: Props) => {
  return (
    <>
      <div className="-mt-2 select-none flex flex-col justify-between gap-2 py-1 text-discord-white">
        <div className="px-3 text-center space-y-2 mx-auto max-w-[440px]">
          <h2 className="text-2xl font-bold">Create a server</h2>
          <p className="pb-2">
            Your server is where you and your friends hang out. Make yours and
            start talking.
          </p>
          <NavItem
            onClick={() => setStep(step === 0 ? 1 : 0)}
            text="Create my own"
            image="/create_server.svg"
            icon={<FiChevronRight className="ml-auto" size={27} />}
          />
        </div>

        <div className="space-y-3 px-3 py-2 max-h-[16rem] overflow-y-scroll overflow-x-visible min-w-full">
          <p className="font-bold text-xs uppercase text-left -mb-2">
            Start from a template
          </p>

          {items.map((item, idx) => (
            <NavItem
              key={idx}
              text={item.text}
              image={item.image}
              icon={<FiChevronRight className="ml-auto" size={27} />}
              onClick={() => setStep(step === 0 ? 1 : 0)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center left-0 bottom-0 bg-discord-sidebar w-full flex-wrap space-y-2 p-5 select-none">
        <h3 className="text-xl font-semibold">Have an invite already?</h3>
        <Button color="gray" compact fullWidth>
          <p className="text-sm font-medium">Join a server</p>
        </Button>
      </div>
    </>
  );
};

const CreateServer = ({ setStep, step }: Props) => {
  const user = useAuthStore((store) => store.user);
  const [name, setName] = useState(`${user?.username}'s server`);
  const supabase = useSupabase();

  const createServer = async () => {
    if (!user) {
      return;
    }

    const { data, error } = await supabase
      .from("guilds")
      .insert([{ name, owner_id: user.id }])
      .select("*");

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }
  };

  return (
    <>
      <div className="-mt-2 select-none flex flex-col justify-between gap-2 py-1 text-discord-white h-full">
        <div className="px-3 text-center space-y-2 mx-auto my-2 max-w-[440px]">
          <h2 className="text-2xl font-bold">Customize your server</h2>
          <p className="pb-2 text-discord-dimmed">
            Give your new server a personality with a name and an icon. You can
            always change it later.
          </p>
          <div className="">
            <Input
              label="Server name"
              name={name}
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p className="text-xs text-left text-discord-dimmed">
            By creating a server, you agree to Discord&apos;s{" "}
            <strong className="text-discord-link">Community Guidelines</strong>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center left-0 bottom-0 bg-discord-sidebar w-full flex-wrap space-y-2 p-3 select-none">
        <p
          onClick={() => setStep(step - 1)}
          className="text-discord-white text-sm cursor-pointer"
        >
          Back
        </p>
        <Button onClick={createServer} compact>
          Create
        </Button>
      </div>
    </>
  );
};

const CreateServerModal: FC<{
  open: boolean;
  onClose: () => void;
  controller: ReactNode;
}> = ({ controller, open, onClose }) => {
  const [step, setStep] = useState(0);

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        {step === 0 && <FirstStep step={step} setStep={setStep} />}
        {step === 1 && <CreateServer step={step} setStep={setStep} />}
      </Modal>
      {controller}
    </div>
  );
};

export default CreateServerModal;
