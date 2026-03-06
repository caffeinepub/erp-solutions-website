import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    company : Text;
    industry : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(sub1 : ContactSubmission, sub2 : ContactSubmission) : Order.Order {
      switch (Int.compare(sub1.timestamp, sub2.timestamp)) {
        case (#equal) { Text.compare(sub1.email, sub2.email) };
        case (order) { order };
      };
    };
  };

  let submissions = Map.empty<Time.Time, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, company : Text, industry : Text, message : Text) : async () {
    let timestamp = Time.now();

    let submission : ContactSubmission = {
      name;
      email;
      company;
      industry;
      message;
      timestamp;
    };

    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort();
  };
};
