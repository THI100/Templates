import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ItemCreator = () => {
  const [tab, setTab] = useState("auction");

  const [auctionItem, setAuctionItem] = useState({
    id: "",
    name: "",
    description: "",
    currentBid: 0,
    category: "",
    isAvailable: true,
    createdAt: new Date().toISOString(),
    updated: false,
    updatedAt: new Date().toISOString(),
    endTime: "",
    historyBids: [],
  });

  const [ecommerceItem, setEcommerceItem] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    category: "",
    isAvaliable: true,
    createdAt: new Date().toISOString(),
    updated: false,
    updatedAt: new Date().toISOString(),
  });

  const handleAuctionChange = (field, value) => {
    setAuctionItem({ ...auctionItem, [field]: value });
  };

  const handleEcommerceChange = (field, value) => {
    setEcommerceItem({ ...ecommerceItem, [field]: value });
  };

  const handleSubmit = () => {
    if (tab === "auction") {
      console.log("Auction Item Created:", auctionItem);
    } else {
      console.log("E-commerce Item Created:", ecommerceItem);
    }
  };

  return (
    <Card className="max-w-xl mx-auto p-6">
      <CardContent>
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="auction">Auction Item</TabsTrigger>
            <TabsTrigger value="ecommerce">E-commerce Item</TabsTrigger>
          </TabsList>

          <TabsContent value="auction">
            <div className="space-y-4">
              <Label>Name</Label>
              <Input value={auctionItem.name} onChange={e => handleAuctionChange("name", e.target.value)} />

              <Label>Description</Label>
              <Textarea value={auctionItem.description} onChange={e => handleAuctionChange("description", e.target.value)} />

              <Label>Current Bid</Label>
              <Input type="number" value={auctionItem.currentBid} onChange={e => handleAuctionChange("currentBid", Number(e.target.value))} />

              <Label>Category</Label>
              <Input value={auctionItem.category} onChange={e => handleAuctionChange("category", e.target.value)} />

              <Label>End Time</Label>
              <Input type="datetime-local" value={auctionItem.endTime} onChange={e => handleAuctionChange("endTime", e.target.value)} />
            </div>
          </TabsContent>

          <TabsContent value="ecommerce">
            <div className="space-y-4">
              <Label>Name</Label>
              <Input value={ecommerceItem.name} onChange={e => handleEcommerceChange("name", e.target.value)} />

              <Label>Description</Label>
              <Textarea value={ecommerceItem.description} onChange={e => handleEcommerceChange("description", e.target.value)} />

              <Label>Price</Label>
              <Input type="number" value={ecommerceItem.price} onChange={e => handleEcommerceChange("price", Number(e.target.value))} />

              <Label>Category</Label>
              <Input value={ecommerceItem.category} onChange={e => handleEcommerceChange("category", e.target.value)} />
            </div>
          </TabsContent>
        </Tabs>
        <Button onClick={handleSubmit} className="mt-6 w-full">
          Create Item
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCreator;