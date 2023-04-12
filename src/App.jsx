import { useContract, useContractWrite } from "@thirdweb-dev/react";



function App() {
  const { contract } = useContract("0x457c96f5407007F871FD6A94A3045D8E56d6121B");
  const { mutateAsync: approve, isLoading } = useContractWrite(contract, "approve");

  const call = async (to, tokenId) => {
    try {
      const data = await approve({ args: [to, tokenId] });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  return (
    <div>
    <button onClick={() => call("0x1234567890", 1)} disabled={isLoading}>
      {isLoading ? "Loading..." : "Approve Token"}
    </button>
  </div>
  )
}

export default App
