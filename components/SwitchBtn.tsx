import { Switch } from "@headlessui/react";

type Props = {
  showPreview: boolean,
  setShowPreview: (value: boolean) => void
 }

const SwitchBtn = (props: Props) => {

  const {showPreview, setShowPreview} = props


  return (
    <>
      <Switch
        checked={showPreview}
        onChange={setShowPreview}
        className={`${
          showPreview ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            showPreview ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </>
  );
};

export default SwitchBtn;
