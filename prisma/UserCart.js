import prisma from "./prisma";

export const createOrder = async (items, address, orderStatus, restaurantName, userId, orderTime, totalAmt) => {
    await prisma.order.create({
        data: {
            items: { createMany: { data: items } },
            address,
            orderStatus,
            restaurantName,
            user: { connect: { id: userId } },
            orderTime,
            totalAmt
        },
    });
}