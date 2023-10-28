const erc20Abi=["function decimals() public view returns (uint8)"]

///will return the address of liquidity provider

const factoryAbi=["function getPair(address tokenA, address tokenB) external view returns (address pair)"]

const pairAbi=["function token0() external view returns (address)",
          "function token1() external view returns (address)",
        "    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)"]

const routerAbi=["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"]

module.exports={
    erc20Abi,
    factoryAbi,
    pairAbi,
    routerAbi
}
